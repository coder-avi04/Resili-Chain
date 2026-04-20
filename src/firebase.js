import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "MOCK_API_KEY",
  authDomain: "mock-resilichain.firebaseapp.com",
  projectId: "mock-resilichain",
  storageBucket: "mock-resilichain.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:mock123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
