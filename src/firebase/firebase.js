// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxnqP5QZu2rG1PyJNuBREVAI36mlJn44c",
  authDomain: "mundozippo-a707b.firebaseapp.com",
  projectId: "mundozippo-a707b",
  storageBucket: "mundozippo-a707b.appspot.com",
  messagingSenderId: "1064492550701",
  appId: "1:1064492550701:web:5e5e7483c1ce712a9b86a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app