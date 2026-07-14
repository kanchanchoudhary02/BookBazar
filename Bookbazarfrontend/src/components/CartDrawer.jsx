import React from 'react';
import { useAuth } from '../context/AuthContext';
import './CartDrawer.css';
import {
  FaTimes, FaTrash, FaShoppingCart,
  FaMinus, FaPlus, FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CartDrawer({ onClose }) {
  const { cart, removeFromCart, clearCart } = useAuth();

  // Total price calculate karo
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <>
      {/* Overlay */}
      <div className="drawer-overlay" onClick={onClose} />

      {/* Drawer */}
      <div className="cart-drawer">

        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-title">
            <FaShoppingCart />
            <h3>My Cart</h3>
            {cart.length > 0 && (
              <span className="drawer-count">{cart.length}</span>
            )}
          </div>
          <button className="drawer-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Items */}
        <div className="drawer-items">
          {cart.length === 0 ? (

            /* Empty Cart */
            <div className="cart-empty">
              <div className="empty-icon">🛒</div>
              <h4>Cart is empty</h4>
              <p>Add some books to your cart!</p>
              <Link to="/books" onClick={onClose}>
                <button className="empty-btn">
                  Find Books
                  <FaArrowRight />
                </button>
              </Link>
            </div>

          ) : (

            /* Cart Items */
            cart.map((item) => (
              <div className="cart-item" key={item.bookId}>

                {/* Image */}
                <div className="item-img">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* Info */}
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p className="item-price">
                    ₹{item.price}
                    {item.quantity > 1 && (
                      <span> × {item.quantity}</span>
                    )}
                  </p>
                  <p className="item-total">
                    Total: ₹{item.price * item.quantity}
                  </p>
                </div>

                {/* Remove */}
                <button
                  className="item-remove"
                  onClick={() => removeFromCart(item.bookId)}
                  aria-label="Remove"
                >
                  <FaTrash />
                </button>

              </div>
            ))
          )}
        </div>

        {/* Footer — sirf items hone pe */}
        {cart.length > 0 && (
          <div className="drawer-footer">

            {/* Total */}
            <div className="drawer-total">
              <span>Total Amount</span>
              <span className="total-price">₹{total}</span>
            </div>

            {/* Buttons */}
            <button className="checkout-btn">
              Checkout
              <FaArrowRight />
            </button>

            <button className="clear-btn" onClick={clearCart}>
              <FaTrash /> Clear Cart
            </button>

          </div>
        )}

      </div>
    </>
  );
}

export default CartDrawer;