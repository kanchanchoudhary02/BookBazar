import React, { useState } from "react";
import "./FeaturedBooks.css";
import {
  FaHeart,
  FaStar,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import books from "../data/books";
import { useAuth } from "../context/AuthContext"; // <-- Check your filename

function FeaturedBooks() {
  const [liked, setLiked] = useState([]);
  const { addToCart, token } = useAuth();

  // Add to Cart
  const handleBuy = async (book) => {
    if (!token) {
      alert("Pehle login karo!");
      return;
    }

    const res = await addToCart(book);

    if (res && res.success) {
      alert("Cart mein add ho gaya! 🛒");
    } else {
      alert("Book add nahi hui!");
    }
  };

  // Wishlist
  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  // Rating Stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < Math.floor(rating) ? "star filled" : "star empty"}
      />
    ));
  };

  return (
    <section className="featured-books">
      <div className="container">

        {/* Section Title */}
        <div className="section-title">
          <span className="section-tag">✦ Featured Collection</span>

          <h2>
            Popular <span>Books</span>
          </h2>

          <p>
            Hand-picked second-hand books at unbeatable student prices.
          </p>
        </div>

        {/* Books */}
        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>

              {/* Image */}
              <div className="book-img-wrap">
                <img src={book.image} alt={book.title} />

                <span className="discount-badge">
                  {book.discount}
                </span>

                <span className="book-badge">
                  {book.badge}
                </span>

                <button
                  className={`heart-btn ${
                    liked.includes(book.id) ? "liked" : ""
                  }`}
                  onClick={() => toggleLike(book.id)}
                >
                  <FaHeart />
                </button>
              </div>

              {/* Info */}
              <div className="book-info">

                <h3>{book.title}</h3>

                <p className="book-author">
                  by {book.author}
                </p>

                {/* Rating */}
                <div className="rating-row">
                  <div className="stars">
                    {renderStars(book.rating)}
                  </div>

                  <span className="rating-num">
                    {book.rating}
                  </span>

                  <span className="review-count">
                    ({book.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="price-row">
                  <span className="new-price">
                    ₹{book.price}
                  </span>

                  <span className="old-price">
                    ₹{book.oldPrice}
                  </span>

                  <span className="you-save">
                    Save ₹{book.oldPrice - book.price}
                  </span>
                </div>

                {/* Add to Cart */}
                <button
                  className="buy-btn"
                  onClick={() => handleBuy(book)}
                >
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="view-all-wrap">
          <Link to="/books">
            <button className="view-all-btn">
              View All Books
              <FaArrowRight className="arrow-icon" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FeaturedBooks;