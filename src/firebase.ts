import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Для Firestore
import { getAuth } from "firebase/auth"; // Для аутентификации

const firebaseConfig = {
  // apiKey: "AIzaSyCvfBjgtJelaDUcU1eKjeNFV7SkExwR_e4",
  // authDomain: "front-shop-e816c.firebaseapp.com",
  // databaseURL: "https://front-shop-e816c-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "front-shop-e816c",
  // storageBucket: "front-shop-e816c.firebasestorage.app",
  // messagingSenderId: "700838918062",
  // appId: "1:700838918062:web:82d0e49ecc40c09b5eba3f"

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: "https://front-shop-e816c-default-rtdb.europe-west1.firebasedatabase.app"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт сервисов
export const db = getFirestore(app); // База данных Firestore
export const auth = getAuth(app); // Аутентификация

