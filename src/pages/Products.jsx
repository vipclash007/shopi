import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import VoiceAgent from '../components/voiceAgent';

const sampleProducts = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'Latest Android smartphone with high performance.',
    price: 24999,
    image: 'nothing.jpg',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Comfortable and powerful noise-cancelling headphones.',
    price: 4999,
    image: 'headphone.webp',
  },
  {
    id: 3,
    name: 'Smartwatch',
    description: 'Track fitness and notifications on the go.',
    price: 9999,
    image: 'watch.webp',
  },
];

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredProducts = sampleProducts
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'priceLowHigh') return a.price - b.price;
      if (sortOption === 'priceHighLow') return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-950 text-gray-100 px-4 py-10 pb-24">
        <h1 className="text-3xl font-bold text-center text-sky-400 mb-4">Products</h1>

        {/* 🔍 Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-zinc-900 border border-sky-600 text-gray-100 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-zinc-900 border border-sky-600 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">Sort by</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-sky-400 text-lg">No products found.</p>
          )}
        </div>

        <VoiceAgent
          apiKey="c225fed8-c424-4a52-bd1d-0bcf37ab16de"
          assistantId="a45c038d-acc0-48ed-a537-0e9930935e43"
        />

        {/* 🛒 Go to Cart Button */}
        <Link to="/cart">
          <div className="fixed bottom-6 right-72 z-50">
            <button className="flex items-center gap-2 bg-zinc-900 border border-sky-400 text-sky-400 px-5 py-3 rounded-full shadow-lg hover:bg-zinc-800 transition duration-300">
              <span className="text-lg">Go to Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5.6A1 1 0 007 20h10a1 1 0 001-.8L19.6 13M7 13h10m-6 6a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Products;
