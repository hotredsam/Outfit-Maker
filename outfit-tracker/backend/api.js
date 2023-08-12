const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const [result] = await pool.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    
    const userId = result.insertId;
    
    const token = jwt.sign({ userId }, 'your_secret_key', { expiresIn: '1h' });
    
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    
    const user = rows[0];
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
    
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Protected route
router.get('/outfits', async (req, res) => {
  try {
    // Authenticate user using middleware or JWT verification
    // const userId = req.user.userId;
    
    const [rows] = await pool.query('SELECT * FROM outfits WHERE user_id = ?', [userId]);
    
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
