import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Drag from '../utils/FollowPointer';
import { motion } from 'framer-motion'; // Corrected import
import { Link } from 'react-router-dom';
import AudioBars from '../utils/AudioBars';
import { useFirebase } from '../context/Firebase';
import VoiceAgent from '../components/voiceAgent';

function Home() {
  const firebase = useFirebase();
  const [isAnimating, setIsAnimating] = useState(true);
  const [showAgent, setShowAgent] = useState(false);

  const handleClick = () => {
    setIsAnimating(false);
    setShowAgent(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100 font-sans">
      <Navbar />
      <AudioBars />

      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-4">
          Start your voice shopping experience
        </h1>

        {firebase.isLoggedIn ? (
          <p className="text-lg text-gray-400 mb-10"> Welcome back to Shopi!</p>
        ) : (   <p className="text-lg text-gray-400 mb-10">Signup and get started</p>)
       }
    
        {firebase.isLoggedIn ? (
          ' Yay! You are logged in 🎉 '
        ) : (
          <div className="space-x-4">
            <button className="bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 px-6 rounded-lg shadow-md transition">
              <Link to="/signup">Signup</Link>
            </button>
            <button className="bg-zinc-800 border border-sky-600 hover:bg-zinc-700 text-sky-400 font-medium py-2 px-6 rounded-lg shadow-md transition">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}

        <div className="my-40 flex justify-center">
          <motion.button
            onClick={handleClick}
            animate={
              isAnimating
                ? {
                    scale: [1, 1.1, 1.1, 1, 1],
                    rotate: [0, 0, 5, -5, 0],
                    borderRadius: ['1rem', '1rem', '2rem', '2rem', '1rem'],
                  }
                : {}
            }
            transition={
              isAnimating
                ? {
                    duration: 2,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }
                : {}
            }
            className="text-2xl px-8 py-4 rounded-3xl border border-sky-400 text-sky-400 bg-zinc-900 shadow-lg"
          >
            Try Shopi 🎙
          </motion.button>
        </div>

        {showAgent && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <VoiceAgent
              apiKey= {import.meta.env.VAPI_API_KEY}
              assistantId={import.meta.env.VAPI_AGENT_ID}
            />
          </div>
        )}
      </div>

      <Drag />
    </div>
  );
}

export default Home;
