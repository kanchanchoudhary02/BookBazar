const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

// ───── CART GET ─────
// Cart mein kya kya hai dekho
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    
    res.json({
      success: true,
      cart: user.cart,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error!',
      error: err.message
    });
  }
});

// ───── CART ADD ─────
// Cart mein item add karo
router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { bookId, title, price, image } = req.body;

    const user = await User.findById(req.user.userId);

    // Kya item already cart mein hai?
    const existingItem = user.cart.find(
      item => item.bookId === bookId
    );

    if (existingItem) {
      // Quantity badha do
      existingItem.quantity += 1;
    } else {
      // Naya item add karo
      user.cart.push({ bookId, title, price, image });
    }

    await user.save();

    res.json({
      success: true,
      message: 'Item added to cart!',
      cart: user.cart,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error!',
      error: err.message
    });
  }
});

// ───── CART REMOVE ─────
// Cart se item hatao
router.delete('/remove/:bookId', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    // Item filter karo — jo match kare use hatao
    user.cart = user.cart.filter(
      item => item.bookId !== req.params.bookId
    );

    await user.save();

    res.json({
      success: true,
      message: 'Item removed from cart!',
      cart: user.cart,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error!',
      error: err.message
    });
  }
});

// ───── CART CLEAR ─────
// Poora cart khali karo
router.delete('/clear', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    user.cart = [];
    await user.save();

    res.json({
      success: true,
      message: 'Cart cleared!',
      cart: [],
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error!',
      error: err.message
    });
  }
});

module.exports = router;