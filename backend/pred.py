# backend/pred.py

import warnings
from transformers import logging as hf_logging
warnings.filterwarnings("ignore", category=UserWarning)
hf_logging.set_verbosity_error()

import re
import nltk
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from transformers import BertTokenizer, BertForSequenceClassification
from sklearn.preprocessing import LabelEncoder
import torch
import os
import sys
import argparse
from googletrans import Translator, LANGUAGES

# Import all handlers from our processing module
from audio_processing import AudioHandler, TranscriptionHandler, ImageHandler

# --- NLTK Data, Label Encoder, Model Path, and Preprocessing (No changes) ---
try:
    nltk.data.find('corpora/wordnet')
except LookupError:
    nltk.download('wordnet', quiet=True)
try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords', quiet=True)

label_encoder = LabelEncoder()
mbti_types = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"]
label_encoder.fit(mbti_types)
model_save_path = os.path.join(os.path.dirname(__file__), "models")
best_model_path = os.path.join(model_save_path, "model.pth")
if not os.path.exists(best_model_path):
    print(f"Error: Model file not found at {best_model_path}.", file=sys.stderr)
    sys.exit(1)

def preprocess_text(text):
    """
    Cleans and preprocesses the text by removing non-alphanumeric characters,
    lemmatizing words, and removing English stopwords.
    """
    text = re.sub(r"[^\w\s]", "", text)
    words = text.split()
    lemmatizer = WordNetLemmatizer()
    stop_words = set(stopwords.words("english"))
    cleaned_text = [lemmatizer.lemmatize(word.lower()) for word in words if word.lower() not in stop_words]
    return " ".join(cleaned_text)

# --- Model and Tokenizer Loading ---
try:
    tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
    model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=len(label_encoder.classes_))
    model.load_state_dict(torch.load(best_model_path, map_location=torch.device("cpu")))
    model.eval()
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)
except Exception as e:
    print(f"Error loading model or tokenizer: {e}", file=sys.stderr)
    sys.exit(1)

# --- Translation Function ---
translator = Translator()

def translate_to_english(text):
    """
    Translates the given text to English using googletrans.
    If the text is already English or translation fails, it returns the original text.
    """
    if not text.strip(): # Handle empty or whitespace-only strings
        return ""
    try:
        # Detect the source language and translate if it's not English
        detected_lang = translator.detect(text).lang
        if detected_lang != 'en':
            translated_text = translator.translate(text, dest='en').text
            # Print translation message to stderr to avoid interfering with stdout output
            print(f"Translated from {LANGUAGES.get(detected_lang, detected_lang)} to English.", file=sys.stderr)
            return translated_text
        else:
            return text # Already English
    except Exception as e:
        print(f"Translation failed: {e}. Returning original text.", file=sys.stderr)
        return text

def predict_mbti_from_text(input_text):
    """
    Predicts the MBTI type from the input text.
    The text is first translated to English, then preprocessed, and finally fed into the model.
    """
    # Translate text to English before preprocessing and prediction
    translated_text = translate_to_english(input_text)
    
    cleaned_text = preprocess_text(translated_text)
    encoded_input = tokenizer.encode_plus(cleaned_text, add_special_tokens=True, max_length=64, padding="max_length", return_attention_mask=True, truncation=True, return_tensors="pt")
    input_ids = encoded_input["input_ids"].to(device)
    attention_mask = encoded_input["attention_mask"].to(device)
    with torch.no_grad():
        outputs = model(input_ids, attention_mask=attention_mask)
    predicted_label_idx = torch.argmax(outputs.logits, dim=1).cpu().numpy()[0]
    return label_encoder.inverse_transform([predicted_label_idx])[0]

# --- Main Execution Block ---
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Predict MBTI from text, audio, video, or image.")
    parser.add_argument("--text", type=str, help="Input text for prediction.")
    parser.add_argument("--audio", type=str, help="Path to an audio file.")
    parser.add_argument("--video", type=str, help="Path to a video file.")
    parser.add_argument("--image", type=str, help="Path to an image file.")
    args = parser.parse_args()

    # Initialize all handlers
    transcription_handler = TranscriptionHandler()
    audio_handler = AudioHandler()
    image_handler = ImageHandler()
    
    uploads_dir = os.path.join(os.path.dirname(__file__), 'uploads')
    os.makedirs(uploads_dir, exist_ok=True)

    try:
        if args.text:
            predicted_mbti = predict_mbti_from_text(args.text)
            print(predicted_mbti)

        elif args.audio:
            transcribed_text = transcription_handler.transcribe_audio(args.audio)
            predicted_mbti = predict_mbti_from_text(transcribed_text)
            print(predicted_mbti)

        elif args.video:
            audio_path = audio_handler.extract_audio_from_video(args.video, output_dir=uploads_dir)
            transcribed_text = transcription_handler.transcribe_audio(audio_path)
            predicted_mbti = predict_mbti_from_text(transcribed_text)
            print(predicted_mbti)
            if os.path.exists(audio_path):
                os.remove(audio_path)

        elif args.image:
            extracted_text = image_handler.extract_text_from_image(args.image)
            predicted_mbti = predict_mbti_from_text(extracted_text)
            print(predicted_mbti)

        else:
            print("No input provided. Please use --text, --audio, --video, or --image.", file=sys.stderr)

    except Exception as e:
        print(f"An error occurred in the prediction pipeline: {e}", file=sys.stderr)
        sys.exit(1)
