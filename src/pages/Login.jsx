import React, { useEffect, useState } from 'react';
//import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/admin';

import { useFirebase } from '../context/Firebase'; // Adjust the import based on your Firebase context setup
import { useNavigate } from 'react-router-dom';


function Login() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is already logged in 
    if (firebase.isLoggedIn) {
      navigate("/"); // Redirect to home if already logged in 
    }
  }, [firebase.isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await firebase.signinWithEmailAndPass(email, password);
     // await signInWithEmailAndPassword(auth, email, password);
      // Redirect or show success message
      console.log("Login success: ", result);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const loginResult = await firebase.signinWithGoogle();
      // Redirect or show success message
      console.log("Google login success: ", loginResult);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">
      <div className="bg-zinc-900 rounded-xl p-8 shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-sky-400 mb-2">Shopi</h2>
        <p className="text-gray-400 mb-6">Voice Controlled Shopping Experience</p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="josh@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-zinc-700" />
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-zinc-700" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white text-zinc-900 font-medium py-2 rounded-lg hover:bg-gray-200 transition border border-zinc-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <g>
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.22l6.88-6.88C35.64 2.36 30.14 0 24 0 14.82 0 6.88 5.82 2.88 14.22l8.06 6.26C12.98 14.36 17.98 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.1 24.5c0-1.64-.14-3.22-.4-4.74H24v9.02h12.44c-.54 2.92-2.16 5.38-4.62 7.06l7.18 5.58C43.98 37.18 46.1 31.36 46.1 24.5z"/>
              <path fill="#FBBC05" d="M10.94 28.48A14.5 14.5 0 0 1 9.5 24c0-1.56.26-3.08.72-4.48l-8.06-6.26A23.97 23.97 0 0 0 0 24c0 3.82.92 7.44 2.56 10.62l8.38-6.14z"/>
              <path fill="#EA4335" d="M24 48c6.14 0 11.28-2.02 15.04-5.5l-7.18-5.58c-2 1.36-4.54 2.18-7.86 2.18-6.02 0-11.12-4.86-12.6-11.18l-8.38 6.14C6.88 42.18 14.82 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </g>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;