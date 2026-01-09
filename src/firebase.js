// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuZ8AsIEzJwGVeCPn63xrLU-jR8dt7b6g",
  authDomain: "umardrinksordersystem.firebaseapp.com",
  projectId: "umardrinksordersystem",
  storageBucket: "umardrinksordersystem.firebasestorage.app",
  messagingSenderId: "829402475086",
  appId: "1:829402475086:web:6de34297d9e1c94d7e711f",
  measurementId: "G-Z00CJ2LYCS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
