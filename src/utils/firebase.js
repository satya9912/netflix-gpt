// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASxqqRBU4xIuEl4wBSDOWfUxPGAJGQMzM",
  authDomain: "netflix-gpt-b4027.firebaseapp.com",
  projectId: "netflix-gpt-b4027",
  storageBucket: "netflix-gpt-b4027.appspot.com",
  messagingSenderId: "177455718347",
  appId: "1:177455718347:web:9c9a052d0b1feb4313e04e",
  measurementId: "G-YNSGJRJS1T"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
