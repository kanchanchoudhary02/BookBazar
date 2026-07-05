import React, { useState } from 'react';
import {
  FaHeart, FaStar, FaShoppingCart,
  FaSearch, FaMapMarkerAlt, FaUser,
  FaBook, FaStickyNote, FaFilter
} from 'react-icons/fa';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import marketplaceItems from '../data/marketplace';
import './Marketplace.css';

function Marketplace() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Default');
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

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

  const filtered = marketplaceItems
    .filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.seller.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === 'All' || item.type === filter;
      return matchSearch && matchFilter;
    })
    .sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price;
      if (sort === 'Price: High to Low') return b.price - a.price;
      if (sort === 'Rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="market-header">
        <div className="market-header-inner">
          <span className="market-tag">🛒 Student Marketplace</span>
          <h1>Buy & Sell <span>Study Material</span></h1>
          <p>Connect with students — buy second-hand books and notes directly</p>

          {/* Search */}
          <div className="market-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by title, seller or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Filter + Sort Bar */}
      <div className="market-toolbar">
        <div className="market-toolbar-inner">

          {/* Filter Tabs */}
          <div className="market-filters">
            {['All', 'Book', 'Notes'].map((f) => (
              <button
                key={f}
                className={`filter-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'Book' && <FaBook />}
                {f === 'Notes' && <FaStickyNote />}
                {f === 'All' && <FaFilter />}
                {f}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="market-sort">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>

        </div>
      </div>

      {/* Items Grid */}
      <div className="market-wrapper">

        {/* Results count */}
        <p className="results-count">
          Showing <strong>{filtered.length}</strong> items
        </p>

        <div className="market-grid">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div className="market-card" key={item.id}>

                {/* Image */}
                <div className="market-img-wrap">
                  <img src={item.image} alt={item.title} />
                  <span className="discount-badge">{item.discount}</span>
                  <span className="condition-badge">{item.condition}</span>
                  <button
                    className={`heart-btn ${liked.includes(item.id) ? 'liked' : ''}`}
                    onClick={() => toggleLike(item.id)}
                  >
                    <FaHeart />
                  </button>
                </div>

                {/* Info */}
                <div className="market-info">

                  {/* Type badge */}
                  <span className={`type-badge ${item.type === 'Book' ? 'type-book' : 'type-notes'}`}>
                    {item.type === 'Book' ? <FaBook /> : <FaStickyNote />}
                    {item.type}
                  </span>

                  <h3>{item.title}</h3>

                  {/* Seller + Location */}
                  <div className="seller-row">
                    <span className="seller">
                      <FaUser /> {item.seller}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="rating-row">
                    <div className="stars">{renderStars(item.rating)}</div>
                    <span className="rating-num">{item.rating}</span>
                    <span className="review-count">({item.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="price-row">
                    <span className="new-price">₹{item.price}</span>
                    <span className="old-price">₹{item.oldPrice}</span>
                    <span className="you-save">
                      Save ₹{item.oldPrice - item.price}
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
              <p>😕 No items found for "{search}"</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Marketplace;