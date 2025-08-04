// backend/debug_server.js - Python olmadan test için
const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 5002;

console.log('Starting server...');

// Simple CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

console.log('CORS configured');

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('Middleware configured');

// --- File Upload Configuration (Multer) ---
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Uploads directory created');
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('audio/') || file.mimetype.startsWith('video/') || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only audio, video, and image files are allowed.'), false);
    }
  },
});

console.log('Multer configured');

// --- Health Check Endpoint ---
app.get('/health', (req, res) => {
  console.log('Health check requested');
  res.json({ status: 'OK', message: 'Backend server is running' });
});

// Test endpoint - Python olmadan
app.post('/predict-mbti', (req, res) => {
  console.log('Received request for text prediction:', req.body);

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text input is required.' });
  }

  // Python yerine mock response
  setTimeout(() => {
    const mockTypes = ['INTJ', 'ENFP', 'ISTJ', 'ESFP'];
    const randomType = mockTypes[Math.floor(Math.random() * mockTypes.length)];
    console.log('Sending mock prediction:', randomType);
    res.json({ mbtiType: randomType });
  }, 1000);
});

// Test endpoint - File upload
app.post('/predict-from-file', upload.single('file'), (req, res) => {
  console.log('Received file upload request:', req.file?.originalname);

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  // Clean up file
  if (fs.existsSync(req.file.path)) {
    fs.unlinkSync(req.file.path);
  }

  // Mock response
  const mockTypes = ['INTJ', 'ENFP', 'ISTJ', 'ESFP'];
  const randomType = mockTypes[Math.floor(Math.random() * mockTypes.length)];
  res.json({ mbtiType: randomType });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error occurred:', error);
  if (error instanceof multer.MulterError) {
    return res.status(400).json({ error: 'File upload error: ' + error.message });
  }
  res.status(500).json({ error: 'Internal server error: ' + error.message });
});

console.log('Routes configured, starting server...');

app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  console.log(`Backend server running on http://localhost:${port}`);
  console.log(`CORS enabled for origin: http://localhost:5173`);
  console.log('Server is ready to accept connections');
});

// Process error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
