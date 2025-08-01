# backend/audio_processing.py
import os
import google.generativeai as genai
from moviepy.video.io.VideoFileClip import VideoFileClip
import PIL.Image  # Import the Python Imaging Library (Pillow)
from dotenv import load_dotenv # Import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Retrieve API key from environment variables
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found in environment variables. Please set it in a .env file or your system environment.")

try:
    genai.configure(api_key=GEMINI_API_KEY)
except Exception as e:
    raise ValueError(f"Failed to configure Gemini API: {e}")


class AudioHandler:
    """Handles audio extraction from video files."""

    def __init__(self):
        pass

    def extract_audio_from_video(self, video_path, output_dir="."):
        """Extracts audio from a video file and saves it as a .wav file."""
        if not os.path.exists(video_path):
            raise FileNotFoundError(f"Video file not found at: {video_path}")
        
        try:
            video = VideoFileClip(video_path)
            base_name = os.path.splitext(os.path.basename(video_path))[0]
            audio_filename = f"{base_name}_audio.wav"
            audio_path = os.path.join(output_dir, audio_filename)
            # Add logger=None to suppress MoviePy's console output (stdout).
            video.audio.write_audiofile(audio_path, codec="pcm_s16le", logger=None)
            video.close()
            return audio_path
        except Exception as e:
            raise ValueError(f"Could not extract audio: {e}")


class ImageHandler:
    """Handles text extraction from image files using Gemini."""

    def __init__(self):
        # Initialize the Gemini model for vision capabilities
        self.gemini_model = genai.GenerativeModel("models/gemini-1.5-flash")

    def extract_text_from_image(self, file_path: str) -> str:
        """
        Extracts text from the given image file.

        Args:
            file_path (str): The path to the image file.

        Returns:
            str: The extracted text from the image.
        """
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Image file not found at: {file_path}")

        try:
            img = PIL.Image.open(file_path)
            # Use a prompt to ask Gemini to perform OCR
            response = self.gemini_model.generate_content(
                ["Extract all text from this image.", img],
                generation_config=genai.types.GenerationConfig(temperature=0.0),
            )

            if response.candidates and response.candidates[0].content.parts:
                return response.candidates[0].content.parts[0].text
            else:
                return "Text extraction from image failed."
        except Exception as e:
            print(f"An error occurred during text extraction from image: {e}")
            raise


class TranscriptionHandler:
    """Handles audio transcription using the Gemini API."""

    def __init__(self):
        self.gemini_model = genai.GenerativeModel("models/gemini-1.5-flash")

    def transcribe_audio(self, file_path: str) -> str:
        """Transcribes the given audio file to text."""
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Audio file not found at: {file_path}")

        try:
            audio_file = genai.upload_file(path=file_path)
            response = self.gemini_model.generate_content(
                ["Please transcribe this audio file.", audio_file],
                generation_config=genai.types.GenerationConfig(temperature=0.0),
            )
            genai.delete_file(audio_file.name)

            if response.candidates and response.candidates[0].content.parts:
                return response.candidates[0].content.parts[0].text
            else:
                return "Transcription failed. No content was generated."
        except Exception as e:
            print(f"An error occurred during transcription: {e}")
            raise
