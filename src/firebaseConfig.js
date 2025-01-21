// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDICr30FAw51Hv9KRLn0GDt9FPrfHSEhQ",
  authDomain: "pokemon-d5abd.firebaseapp.com",
  projectId: "pokemon-d5abd",
  storageBucket: "pokemon-d5abd.firebasestorage.app",
  messagingSenderId: "122521323792",
  appId: "1:122521323792:web:ae04510760c776497abd95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
