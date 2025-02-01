// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart';
import ProtectedRoute from './components/ProtectedRoute';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetail />} /> 
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} /> {/* Protected route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;