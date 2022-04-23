
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlQraBhX2PgaZu1PswXyP0ZPGtYFMZQ-k",
  authDomain: "laboutique-a4f63.firebaseapp.com",
  projectId: "laboutique-a4f63",
  storageBucket: "laboutique-a4f63.appspot.com",
  messagingSenderId: "696532599279",
  appId: "1:696532599279:web:2305b7239bb45d99e6761a",
  measurementId: "G-XF0HF5GZ86"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

