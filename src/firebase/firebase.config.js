// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAXLjobK3Mm8O30wCiLnA3x4WQzX11ctY",
  authDomain: "education-website-cef9f.firebaseapp.com",
  projectId: "education-website-cef9f",
  storageBucket: "education-website-cef9f.appspot.com",
  messagingSenderId: "709964266394",
  appId: "1:709964266394:web:2945d0499084f9bca55823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app