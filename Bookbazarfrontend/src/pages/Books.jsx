import React, { useState } from 'react';
import { FaHeart, FaStar, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import books from '../data/books';
import './Book.css';

function Books() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState('');

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

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="books-header">
        <div className="books-header-inner">
          <span className="books-tag">📚 Browse Collection</span>
          <h1>Second-Hand <span>Books</span></h1>
          <p>Find affordable books for every stream and semester</p>

          {/* Search */}
          <div className="books-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="books-wrapper">
        <div className="books-grid">
          {filtered.length > 0 ? (
            filtered.map((book) => (
              <div className="book-card" key={book.id}>

                {/* Image */}
                <div className="book-img-wrap">
                  <img src={book.image} alt={book.title} />
                  <span className="discount-badge">{book.discount}</span>
                  <span className="book-badge">{book.badge}</span>
                  <button
                    className={`heart-btn ${liked.includes(book.id) ? 'liked' : ''}`}
                    onClick={() => toggleLike(book.id)}
                  >
                    <FaHeart />
                  </button>
                </div>

                {/* Info */}
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p className="book-author">by {book.author}</p>

                  <div className="rating-row">
                    <div className="stars">{renderStars(book.rating)}</div>
                    <span className="rating-num">{book.rating}</span>
                    <span className="review-count">({book.reviews})</span>
                  </div>

                  <div className="price-row">
                    <span className="new-price">₹{book.price}</span>
                    <span className="old-price">₹{book.oldPrice}</span>
                    <span className="you-save">
                      Save ₹{book.oldPrice - book.price}
                    </span>
                  </div>

                  <button className="buy-btn">
                    <FaShoppingCart />
                    Buy Now
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="no-results">
              <p>😕 No books found for "{search}"</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Books;