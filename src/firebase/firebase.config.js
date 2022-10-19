// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiCZJ141jYp7UFr2h3ETDGptff_Tw9h_k",
    authDomain: "ema-john-simple-auth-3e7b6.firebaseapp.com",
    projectId: "ema-john-simple-auth-3e7b6",
    storageBucket: "ema-john-simple-auth-3e7b6.appspot.com",
    messagingSenderId: "605684155534",
    appId: "1:605684155534:web:117c2047891465ea4ab5df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;