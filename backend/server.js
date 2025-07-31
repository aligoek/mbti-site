// backend/server.js
const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const port = 5000; // Backend sunucusunun çalışacağı port

// Middleware'ler
// CORS: Frontend'in farklı bir portta çalışması durumunda çapraz kaynak isteklerine izin verir.
// Geliştirme aşamasında tüm kaynaklara izin veriyoruz.
app.use(cors());
// express.json(): Gelen JSON istek gövdelerini ayrıştırmak için.
app.use(express.json());

// MBTI tahmini için POST endpoint'i
app.post('/predict-mbti', (req, res) => {
  const { text } = req.body; // Frontend'den gelen metin verisi

  // Metin boşsa hata döndür
  if (!text) {
    return res.status(400).json({ error: 'Text input is required for MBTI prediction.' });
  }

  // Python betiğinin yolu
  // server.js dosyasının backend klasörü içinde olduğunu varsayıyoruz.
  const pythonScriptPath = path.join(__dirname, 'pred.py');

  // Python betiğini ayrı bir süreç olarak başlat
  // Metni komut satırı argümanı olarak Python betiğine iletiyoruz.
  const pythonProcess = spawn('python', [pythonScriptPath, text]);

  let predictionResult = '';
  let errorOutput = '';

  // Python betiğinden gelen standart çıktıyı (stdout) yakala
  pythonProcess.stdout.on('data', (data) => {
    predictionResult += data.toString();
  });

  // Python betiğinden gelen hata çıktısını (stderr) yakala
  pythonProcess.stderr.on('data', (data) => {
    errorOutput += data.toString();
  });

  // Python süreci kapandığında
  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      // Eğer Python betiği hata koduyla çıkarsa
      console.error(`Python script exited with code ${code}`);
      console.error(`Error output from Python script: ${errorOutput}`);
      return res.status(500).json({ error: 'Failed to get MBTI prediction from backend.', details: errorOutput });
    }

    // Python betiği sadece tahmin edilen MBTI tipini yazdıracak şekilde güncellendiği için,
    // çıktıyı doğrudan kullanabiliriz.
    const predictedMBTI = predictionResult.trim(); // Boşlukları temizle

    // Tahmin edilen MBTI tipini frontend'e JSON olarak gönder
    res.json({ mbtiType: predictedMBTI });
  });

  // Python sürecini başlatırken bir hata oluşursa
  pythonProcess.on('error', (err) => {
    console.error('Failed to start Python subprocess:', err);
    res.status(500).json({ error: 'Failed to start backend prediction process.', details: err.message });
  });
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});