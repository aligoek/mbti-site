// backend/server.js
const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 5001;

// --- CORS Configuration ---
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// --- File Upload Configuration (Multer) ---
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Accept audio, video, and image files
    if (file.mimetype.startsWith('audio/') || file.mimetype.startsWith('video/') || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only audio, video, and image files are allowed.'), false);
    }
  },
});

// --- Health Check Endpoint ---
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend server is running' });
});

// --- Prediction Endpoints ---
// Endpoint for TEXT-based prediction
app.post('/predict-mbti', (req, res) => {
  console.log('Received request for text prediction:', req.body);

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text input is required.' });
  }

  const pythonProcess = spawn('python', [path.join(__dirname, 'pred.py'), '--text', text]);
  handlePythonProcess(pythonProcess, res);
});

// Endpoint for FILE-based (Audio/Video/Image) prediction
app.post('/predict-from-file', upload.single('file'), (req, res) => {
  console.log('Received file upload request:', req.file?.originalname);

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  const filePath = req.file.path;
  const mimeType = req.file.mimetype;
  let fileTypeArg; // Argument for the python script, e.g., --video

  if (mimeType.startsWith('video/')) {
    fileTypeArg = '--video';
  } else if (mimeType.startsWith('audio/')) {
    fileTypeArg = '--audio';
  } else if (mimeType.startsWith('image/')) {
    fileTypeArg = '--image';
  } else {
    // This case should be blocked by fileFilter, but as a fallback:
    fs.unlinkSync(filePath); // Clean up the invalid file
    return res.status(400).json({ error: 'Unsupported file type.' });
  }

  const pythonProcess = spawn('python', [path.join(__dirname, 'pred.py'), fileTypeArg, filePath]);
  handlePythonProcess(pythonProcess, res, filePath);
});

// --- Helper Function to Handle Python Subprocess ---
function handlePythonProcess(pythonProcess, res, filePathToDelete = null) {
  let predictionResult = '';
  let errorOutput = '';

  pythonProcess.stdout.on('data', (data) => {
    predictionResult += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    errorOutput += data.toString();
    console.error(`Python stderr: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    if (filePathToDelete && fs.existsSync(filePathToDelete)) {
      fs.unlinkSync(filePathToDelete);
    }

    if (code !== 0) {
      console.error(`Python process exited with code ${code}:`, errorOutput);
      return res.status(500).json({ error: 'Failed to get MBTI prediction.', details: errorOutput });
    }

    console.log('Prediction result:', predictionResult.trim());
    res.json({ mbtiType: predictionResult.trim() });
  });

  pythonProcess.on('error', (err) => {
    console.error('Python process error:', err);
    if (filePathToDelete && fs.existsSync(filePathToDelete)) {
      fs.unlinkSync(filePathToDelete);
    }
    res.status(500).json({ error: 'Failed to start prediction process.', details: err.message });
  });
}

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    return res.status(400).json({ error: 'File upload error: ' + error.message });
  }
  res.status(500).json({ error: 'Internal server error: ' + error.message });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
  console.log(`CORS enabled for origins: http://localhost:5173, http://127.0.0.1:5173`);
});
