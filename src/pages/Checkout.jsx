import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Checkout() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-emerald-400 mb-4">Your order has been placed successfully!</h1>
        <p className="text-gray-400">Thank you for shopping with Shopi 🎉</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-6 bg-sky-600 px-6 py-2 rounded-lg text-white hover:bg-sky-500"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Checkout;