import React, { useState } from 'react';
import {
  FaBook, FaStickyNote, FaCamera,
  FaRupeeSign, FaMapMarkerAlt, FaUser,
  FaPhone, FaCheckCircle
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Sell.css';

function Sell() {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Book',
    subject: '',
    semester: '',
    condition: 'Good',
    price: '',
    description: '',
    name: '',
    phone: '',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.price || !formData.name) {
      alert('Please fill all required fields!');
      return;
    }
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="sell-success">
          <div className="success-card">
            <div className="success-icon">
              <FaCheckCircle />
            </div>
            <h2>Listed Successfully! 🎉</h2>
            <p>Your item has been listed on BookBazar marketplace.</p>
            <p className="success-detail">
              <strong>{formData.title}</strong> — ₹{formData.price}
            </p>
            <button
              className="success-btn"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  title: '', type: 'Book', subject: '',
                  semester: '', condition: 'Good', price: '',
                  description: '', name: '', phone: '', location: '',
                });
                setImagePreview(null);
              }}
            >
              List Another Item
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="sell-header">
        <div className="sell-header-inner">
          <span className="sell-tag">💰 Earn Money</span>
          <h1>Sell Your <span>Study Material</span></h1>
          <p>List your old books and notes — earn money in minutes!</p>
        </div>
      </div>

      {/* Form */}
      <div className="sell-wrapper">
        <div className="sell-form">

          {/* Step 1 — Item Details */}
          <div className="form-section">
            <h3 className="section-label">
              <span className="step-num">1</span>
              Item Details
            </h3>

            {/* Type */}
            <div className="type-selector">
              <button
                className={`type-btn ${formData.type === 'Book' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, type: 'Book' })}
              >
                <FaBook /> Book
              </button>
              <button
                className={`type-btn ${formData.type === 'Notes' ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, type: 'Notes' })}
              >
                <FaStickyNote /> Notes
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group full">
                <label>Item Title *</label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Data Structures Using C++"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Computer Science"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Semester</label>
                <select name="semester" value={formData.semester} onChange={handleChange}>
                  <option value="">Select Semester</option>
                  {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map(s => (
                    <option key={s} value={s}>{s} Semester</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Condition *</label>
                <select name="condition" value={formData.condition} onChange={handleChange}>
                  <option>Like New</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>

              <div className="form-group">
                <label>Price (₹) *</label>
                <div className="price-input">
                  <FaRupeeSign />
                  <input
                    type="number"
                    name="price"
                    placeholder="e.g. 299"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group full">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Describe your item — edition, condition details, etc."
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Step 2 — Photo */}
          <div className="form-section">
            <h3 className="section-label">
              <span className="step-num">2</span>
              Add Photo
            </h3>

            <div className="image-upload">
              {imagePreview ? (
                <div className="image-preview">
                  <img src={imagePreview} alt="Preview" />
                  <button
                    className="remove-img"
                    onClick={() => setImagePreview(null)}
                  >
                    ✕ Remove
                  </button>
                </div>
              ) : (
                <label className="upload-area">
                  <FaCamera className="camera-icon" />
                  <p>Click to upload photo</p>
                  <span>JPG, PNG up to 5MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    style={{ display: 'none' }}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Step 3 — Contact */}
          <div className="form-section">
            <h3 className="section-label">
              <span className="step-num">3</span>
              Contact Details
            </h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Your Name *</label>
                <div className="input-icon">
                  <FaUser />
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <div className="input-icon">
                  <FaPhone />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group full">
                <label>Location</label>
                <div className="input-icon">
                  <FaMapMarkerAlt />
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Jaipur, Rajasthan"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button className="submit-btn" onClick={handleSubmit}>
            🚀 List My Item Now
          </button>

        </div>

        {/* Tips Sidebar */}
        <div className="sell-tips">
          <h3>💡 Tips for faster selling</h3>
          <ul>
            <li>✅ Add a clear photo of the item</li>
            <li>✅ Mention edition and condition clearly</li>
            <li>✅ Set a competitive price</li>
            <li>✅ Add your correct location</li>
            <li>✅ Respond to buyers quickly</li>
          </ul>

          <div className="tip-stats">
            <div className="tip-stat">
              <h4>5K+</h4>
              <p>Items Sold</p>
            </div>
            <div className="tip-stat">
              <h4>3K+</h4>
              <p>Happy Sellers</p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Sell;