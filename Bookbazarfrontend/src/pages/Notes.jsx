import React, { useState } from 'react';
import { FaHeart, FaStar, FaDownload, FaSearch, FaPen, FaLaptop } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import notes from '../data/notes';
import './Notes.css';

function Notes() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < Math.floor(rating) ? 'star filled' : 'star empty'}
      />
    ));
  };

  const filtered = notes.filter((n) => {
    const matchSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.subject.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || n.type === filter;
    return matchSearch && matchFilter;
  });

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="notes-header">
        <div className="notes-header-inner">
          <span className="notes-tag">📝 Study Material</span>
          <h1>Semester <span>Notes</span></h1>
          <p>Handwritten & digital notes for every subject and semester</p>

          {/* Search */}
          <div className="notes-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by title or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter Tabs */}
          <div className="notes-filters">
            {['All', 'Handwritten', 'Digital'].map((f) => (
              <button
                key={f}
                className={`filter-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'Handwritten' && <FaPen />}
                {f === 'Digital' && <FaLaptop />}
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="notes-wrapper">
        <div className="notes-grid">
          {filtered.length > 0 ? (
            filtered.map((note) => (
              <div className="note-card" key={note.id}>

                {/* Image */}
                <div className="note-img-wrap">
                  <img src={note.image} alt={note.title} />
                  <span className="discount-badge">{note.discount}</span>
                  <span className="note-type-badge">
                    {note.type === 'Handwritten' ? <FaPen /> : <FaLaptop />}
                    {note.type}
                  </span>
                  <button
                    className={`heart-btn ${liked.includes(note.id) ? 'liked' : ''}`}
                    onClick={() => toggleLike(note.id)}
                  >
                    <FaHeart />
                  </button>
                </div>

                {/* Info */}
                <div className="note-info">
                  <div className="note-meta">
                    <span className="note-subject">{note.subject}</span>
                    <span className="note-sem">{note.semester}</span>
                  </div>

                  <h3>{note.title}</h3>

                  <div className="rating-row">
                    <div className="stars">{renderStars(note.rating)}</div>
                    <span className="rating-num">{note.rating}</span>
                    <span className="review-count">({note.reviews})</span>
                  </div>

                  <div className="price-row">
                    <span className="new-price">₹{note.price}</span>
                    <span className="old-price">₹{note.oldPrice}</span>
                    <span className="you-save">
                      Save ₹{note.oldPrice - note.price}
                    </span>
                  </div>

                  <button className="download-btn">
                    <FaDownload />
                    Get Notes
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="no-results">
              <p>😕 No notes found for "{search}"</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Notes;