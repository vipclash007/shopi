import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-10 pb-24">
      <h1 className="text-3xl font-bold text-center text-sky-400 mb-10">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-zinc-800 p-4 mb-4 rounded-lg">
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-400">₹{item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => removeFromCart(item.id)} className="bg-zinc-700 px-2 py-1 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)} className="bg-sky-600 px-2 py-1 rounded">+</button>
              </div>
            </div>
          ))}

          <div className="text-right text-xl font-semibold text-sky-400 mb-6">
            Total: ₹{total}
          </div>

          <div className="text-center mb-6">
            <Link to="/checkout">
              <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-lg text-white font-medium">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Go Back to Products Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Link to="/products">
          <button className="flex items-center gap-2 bg-zinc-900 border border-sky-400 text-sky-400 px-5 py-3 rounded-full shadow-lg hover:bg-zinc-800 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Products</span>
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Cart;
