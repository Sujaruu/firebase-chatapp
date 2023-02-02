// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzlHJcxNiQv-8r18vAFdrDeF7ugu1QSzk",
  authDomain: "nextjs-app-8d65d.firebaseapp.com",
  projectId: "nextjs-app-8d65d",
  storageBucket: "nextjs-app-8d65d.appspot.com",
  messagingSenderId: "210159229642",
  appId: "1:210159229642:web:6fbb0d9e426547740bb233",
  measurementId: "G-XHBY8PYHY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const Authentication = getAuth(app);
