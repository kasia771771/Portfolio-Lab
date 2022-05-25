// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAQLDZZ2Ir6PCpXE0a5KLo4M8DEhwYLKCI",
  authDomain: "portfolio-2129e.firebaseapp.com",
  projectId: "portfolio-2129e",
  storageBucket: "portfolio-2129e.appspot.com",
  messagingSenderId: "564764720401",
  appId: "1:564764720401:web:cc2b8b9d4c4782e2cc60b0",
  measurementId: "G-LK0EHNEC7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

