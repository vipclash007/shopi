import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
// import { auth, db } from '../firebase/admin';

import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  console.log(firebase);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
      // Check if user is already logged in 
      if (firebase.isLoggedIn) {
        navigate("/"); // Redirect to home if already logged in 
      }
  }, [firebase.isLoggedIn, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
    try {
      const result = await firebase.signupWithEmailAndPassword(email, password);
      console.log("Signup success: ", result);
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // const user = userCredential.user;
      // await setDoc(doc(db, "users", user.uid), {
      //   username,
      //   email,
      // });
      // Redirect or show success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">
      <div className="bg-zinc-900 rounded-xl p-8 shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-sky-400 mb-2">Create Account</h2>
        <p className="text-gray-400 mb-6">Join the Shopi experience</p>

        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1 text-gray-300">Username</label>
            <input
              type="text"
              placeholder="josh"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500"
            />
          </div>

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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;