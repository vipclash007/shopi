import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aishopping-a0476.firebaseapp.com",
  projectId: "aishopping-a0476",
  storageBucket: "aishopping-a0476.firebasestorage.app",
  messagingSenderId: "311192991967",
  appId: "1:311192991967:web:b6de1900763006162ad16a",
  measurementId: "G-7M8J561DNJ"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user);
                console.log("User is signed in:", user);
            } else {
                setUser(null);
                console.log("No user is signed in.");
            }
        });
    }, []);


    const signupWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password);
   }

   const signinWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    const signinWithGoogle = () => {
        return signInWithPopup(firebaseAuth, googleProvider);
    }

    const isLoggedIn = user ? true : false;

    return (
    <FirebaseContext.Provider 
      value={{
        signupWithEmailAndPassword, 
        signinWithEmailAndPass,
        signinWithGoogle,
        isLoggedIn
        }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}