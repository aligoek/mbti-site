import re
import nltk
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from transformers import BertTokenizer, BertForSequenceClassification
from sklearn.preprocessing import LabelEncoder
import torch
import os
import sys # sys modülünü import ediyoruz

# NLTK verilerinin indirildiğinden emin olun (sadece bir kez çalışması yeterli)
try:
    nltk.data.find('corpora/wordnet')
except LookupError: # DownloadError yerine LookupError kullanıldı
    print("NLTK 'wordnet' kaynağı bulunamadı, indiriliyor...", file=sys.stderr)
    nltk.download('wordnet')
    print("'wordnet' başarıyla indirildi.", file=sys.stderr)

try:
    nltk.data.find('corpora/stopwords')
except LookupError: # DownloadError yerine LookupError kullanıldı
    print("NLTK 'stopwords' kaynağı bulunamadı, indiriliyor...", file=sys.stderr)
    nltk.download('stopwords')
    print("'stopwords' başarıyla indirildi.", file=sys.stderr)

label_encoder = LabelEncoder()
mbti_types = [
    "ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP",
    "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ",
]
label_encoder.fit(mbti_types)

# Modelin kaydedildiği yolu dinamik olarak belirleyelim
# Bu, pred.py dosyasının bulunduğu klasördeki 'models' klasörünü işaret eder.
model_save_path = os.path.join(os.path.dirname(__file__), "models")
os.makedirs(model_save_path, exist_ok=True) # Klasörün var olduğundan emin ol

best_model_path = os.path.join(model_save_path, "model.pth")

# Model dosyasının varlığını kontrol et
if not os.path.exists(best_model_path):
    print(f"Hata: Model dosyası bulunamadı: {best_model_path}. Lütfen modelin eğitildiğinden ve doğru yere kaydedildiğinden emin olun.", file=sys.stderr)
    sys.exit(1) # Hata koduyla çık

def preprocess_text(text):
    text = re.sub(r"[^\w\s]", "", text)
    words = text.split()
    lemmatizer = WordNetLemmatizer()
    stop_words = set(stopwords.words("english"))
    cleaned_text = [
        lemmatizer.lemmatize(word.lower())
        for word in words
        if word.lower() not in stop_words
    ]
    return " ".join(cleaned_text)

# Tokenizer ve modeli global olarak başlatın
# Bu, betik her çalıştığında yeniden yüklemeyi önler (ancak child_process her zaman yeniden başlatır).
try:
    tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
    model = BertForSequenceClassification.from_pretrained(
        "bert-base-uncased", num_labels=len(label_encoder.classes_)
    )
    model.load_state_dict(torch.load(best_model_path, map_location=torch.device("cpu")))
    model.eval()
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)
except Exception as e:
    print(f"Model veya tokenizer yüklenirken hata oluştu: {e}", file=sys.stderr)
    sys.exit(1)

def predict_mbti(input_text):
    cleaned_text = preprocess_text(input_text)

    encoded_input = tokenizer.encode_plus(
        cleaned_text,
        add_special_tokens=True,
        max_length=64,
        padding="max_length",
        return_attention_mask=True,
        truncation=True,
        return_tensors="pt",
    )
    input_ids = encoded_input["input_ids"].to(device)
    attention_mask = encoded_input["attention_mask"].to(device)

    with torch.no_grad():
        outputs = model(input_ids, attention_mask=attention_mask)
        logits = outputs.logits

    predicted_label_idx = torch.argmax(logits, dim=1).cpu().numpy()[0]
    predicted_label = label_encoder.inverse_transform([predicted_label_idx])[0]
    return predicted_label

if __name__ == "__main__":
    # Komut satırı argümanı olarak metin alın
    if len(sys.argv) > 1:
        text_from_frontend = sys.argv[1]
        predicted_mbti = predict_mbti(text_from_frontend)
        print(predicted_mbti) # Sadece MBTI tipini yazdır
    else:
        # Argüman olmadan doğrudan çalıştırıldığında veya test için örnek metin
        sample_text = "2024 starts with a bang 😅. Everyone's year-end summaries are so brilliant, compared to them it feels like I haven't lived at all. By contrast, I feel a year younger 😘.Today in class, I realized I lost my red pen. I remembered that my Python exam teacher borrowed it yesterday and didn't return it 😅.I only realized after the exam that there's a mode on the calculator that can calculate variance with just one click 😅. When I asked my classmate how he knew, he said that calculators are allowed in Shanghai's college entrance exams, and they learned it quite early.During the trial, it was clearly stated that Trump had never been involved with Epstein Island. I'm surprised he didn't fabricate millions of pages of documents to drag Trump down, I'm devastated.Mariah Carey, you really have a discerning eye. At that time, you shot a music video for this song with a low-budget 'nobody cares' special effect, and indeed, this song has remained popular."
        predicted_mbti = predict_mbti(sample_text)
        print(predicted_mbti)
