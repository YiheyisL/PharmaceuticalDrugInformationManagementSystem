// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB48pUl4nR63ic9Hb6bRXfueywQ7o_KIss",
  authDomain: "pdims-a10c7.firebaseapp.com",
  projectId: "pdims-a10c7",
  storageBucket: "pdims-a10c7.appspot.com",
  messagingSenderId: "387717080671",
  appId: "1:387717080671:web:f138952697f9dcbf425dea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
