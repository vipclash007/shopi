import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100 font-sans">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-sky-400 mb-6">About Shopi 🎙️</h1>
        
        <p className="text-lg text-gray-300 mb-6">
          Shopi is your personal voice-powered shopping assistant that makes discovering and buying products seamless and interactive.
        </p>

        <p className="text-md text-gray-400 mb-6">
          Whether you're browsing the latest gadgets or managing your cart, Shopi makes the experience smooth and futuristic — powered entirely through your voice.
        </p>

        <div className="bg-zinc-900 border border-sky-600 p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl text-sky-400 font-semibold mb-2">Powered by Vapi AI</h2>
          <p className="text-gray-300">
            Our smart voice assistant is built using <span className="text-sky-300 font-medium">Vapi AI</span>, enabling real-time conversations and intelligent responses to your shopping needs.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Shopi. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default About;
