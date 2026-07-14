import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './LoginModal.css';
import { FaUser, FaEnvelope, FaLock, FaTimes, FaBookOpen } from 'react-icons/fa';

function LoginModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { login, register, loading } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async () => {
    setError('');

    // Validation
    if (!formData.email || !formData.password) {
      setError('Email aur Password zaroor bharo!');
      return;
    }

    if (!isLogin && !formData.name) {
      setError('Naam zaroor bharo!');
      return;
    }

    if (isLogin) {
      // Login
      const res = await login(formData.email, formData.password);
      if (res.success) {
        setSuccess('Login successful! 🎉');
        setTimeout(() => onClose(), 1000);
      } else {
        setError(res.message);
      }
    } else {
      // Register
      const res = await register(formData.name, formData.email, formData.password);
      if (res.success) {
        setSuccess('Account created successfully! 🎉');
        setTimeout(() => onClose(), 1000);
      } else {
        setError(res.message);
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Logo */}
        <div className="modal-logo">
          <FaBookOpen />
          <span>BookBazar</span>
        </div>

        {/* Title */}
        <h2>{isLogin ? 'Welcome Back! 👋' : 'Join BookBazar! 🎉'}</h2>
        <p>{isLogin ? 'Login to explore books' : 'Create a free account'}</p>

        {/* Toggle */}
        <div className="modal-toggle">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => { setIsLogin(true); setError(''); }}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => { setIsLogin(false); setError(''); }}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="modal-form">

          {/* Name — sirf register mein */}
          {!isLogin && (
            <div className="modal-input">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Tumhara naam"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Email */}
          <div className="modal-input">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="modal-input">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Error */}
          {error && <p className="modal-error">❌ {error}</p>}

          {/* Success */}
          {success && <p className="modal-success">✅ {success}</p>}

          {/* Submit */}
          <button
            className="modal-submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Please wait...' : isLogin ? 'Login Karo' : 'Account Banao'}
          </button>

        </div>

      </div>
    </div>
  );
}

export default LoginModal;