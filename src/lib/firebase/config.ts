import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYGMvuIuJlemaCKzQgUfU0HuLskckCzZI",
  authDomain: "sdn2-kedundung.firebaseapp.com",
  projectId: "sdn2-kedundung",
  storageBucket: "sdn2-kedundung.firebasestorage.app",
  messagingSenderId: "485869433584",
  appId: "1:485869433584:web:d6930f5f702438e9244835",
  measurementId: "G-2EX8HS8JJ2"
};

// Initialize Firebase (prevent multiple initializations in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
