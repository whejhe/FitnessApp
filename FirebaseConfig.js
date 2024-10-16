// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzj-RbyO2Gn7Vl-jaEOorMJc8FLRm93hc",
    authDomain: "fitnessapp-6cc43.firebaseapp.com",
    projectId: "fitnessapp-6cc43",
    storageBucket: "fitnessapp-6cc43.appspot.com",
    messagingSenderId: "1078355194918",
    appId: "1:1078355194918:web:d2f96e379d4ecf2ffa62e7"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
