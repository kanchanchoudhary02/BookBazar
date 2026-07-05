const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

  // Header se token lo
  
  const token = req.header('Authorization');

  // Token hai ya nahi check karo
  if (!token) {
    return res.status(401).json({ 
      success: false,
      message: 'Access denied — Login karo pehle!' 
    });
  }

  try {
    // Token verify karo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // User info request mein add karo
    req.user = decoded;
    
    // Aage jaao
    next();

  } catch (err) {
    res.status(401).json({ 
      success: false,
      message: 'Token invalid hai!' 
    });
  }
};

module.exports = authMiddleware;