const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// .env file load karo
dotenv.config();

// Express app banao
const app = express();

// ───── Middleware ─────
app.use(cors());
app.use(express.json());

// ───── MongoDB Connect ─────
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' MongoDB Connected!'))
  .catch((err) => console.log('❌ MongoDB Error:', err));

// ───── Test Route ─────
app.get('/', (req, res) => {
  res.json({ message: ' BookBazar API is running!' });
});

// ───── Server Start ─────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});