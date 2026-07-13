import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Context banao
const AuthContext = createContext();

// Base URL
const API = 'http://localhost:5000/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  // ───── Axios header set karo ─────
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
      fetchCart();
    }
  }, [token]);

  // ───── Cart fetch karo ─────
  const fetchCart = async () => {
    try {
      const res = await axios.get(`${API}/cart`);
      setCart(res.data.cart);
    } catch (err) {
      console.log('Cart fetch error:', err);
    }
  };

  // ───── Register ─────
  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/auth/register`, {
        name, email, password
      });
      setToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem('token', res.data.token);
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        message: err.response?.data?.message || 'Error!' 
      };
    } finally {
      setLoading(false);
    }
  };

  // ───── Login ─────
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/auth/login`, {
        email, password
      });
      setToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem('token', res.data.token);
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        message: err.response?.data?.message || 'Error!' 
      };
    } finally {
      setLoading(false);
    }
  };

  // ───── Logout ─────
  const logout = () => {
    setToken(null);
    setUser(null);
    setCart([]);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  // ───── Cart Add ─────
  const addToCart = async (book) => {
    try {
      const res = await axios.post(`${API}/cart/add`, {
        bookId: String(book.id),
        title: book.title,
        price: book.price,
        image: book.image,
      });
      setCart(res.data.cart);
      return { success: true };
    } catch (err) {
      return { success: false };
    }
  };

  // ───── Cart Remove ─────
  const removeFromCart = async (bookId) => {
    try {
      const res = await axios.delete(`${API}/cart/remove/${bookId}`);
      setCart(res.data.cart);
    } catch (err) {
      console.log('Remove error:', err);
    }
  };

  // ───── Cart Clear ─────
  const clearCart = async () => {
    try {
      await axios.delete(`${API}/cart/clear`);
      setCart([]);
    } catch (err) {
      console.log('Clear error:', err);
    }
  };

  return (
    <AuthContext.Provider value={{
      user, token, cart, loading,
      register, login, logout,
      addToCart, removeFromCart, clearCart,
      fetchCart,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
export function useAuth() {
  return useContext(AuthContext);
}