const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {JWT_SECRET,JWT_EXPIRE } = require('../config/config');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRE });

    res.status(201).json({
      message: 'User registered successfully',
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    //console.log(user)
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRE });

    res.json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
