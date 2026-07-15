import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXOp6MPnwArV0NiPPAmkBBKdvQocOgadk",
  authDomain: "rawaan-online-shop.firebaseapp.com",
  projectId: "rawaan-online-shop",
  storageBucket: "rawaan-online-shop.firebasestorage.app",
  messagingSenderId: "492970437433",
  appId: "1:492970437433:web:0d4e128992025eb06b56e8",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);