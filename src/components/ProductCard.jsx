import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const {  cart, addToCart, removeFromCart } = useCart();
  const item = cart.find((i) => i.id === product.id);

  return (
    <div className="bg-zinc-800 text-white rounded-xl shadow-md p-4 w-74">
      <img src={product.image} alt={product.name} className="rounded-lg mb-4 w-full h-80 object-cover" />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-sm text-gray-300 mb-2">{product.description}</p>
      <p className="text-sky-400 font-semibold mb-4">₹{product.price}</p>

      <div className="flex items-center gap-2">
        <button onClick={() => removeFromCart(product.id)} className="bg-zinc-700 px-2 py-1 rounded">-</button>
        <span>{item ? item.quantity : 0}</span>
        <button onClick={() => addToCart(product)} className="bg-sky-600 px-2 py-1 rounded">+</button>
      </div>
    </div>
  );
}

export default ProductCard;