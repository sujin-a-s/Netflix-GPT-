// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMKavQJzWT1ow8rcQa4qwjpx33wTU_5II",
  authDomain: "netflix-gpt-bf7e9.firebaseapp.com",
  projectId: "netflix-gpt-bf7e9",
  storageBucket: "netflix-gpt-bf7e9.appspot.com",
  messagingSenderId: "332866025047",
  appId: "1:332866025047:web:4c0614aa2424582bda9512",
  measurementId: "G-C7QV396SSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);  // Pass 'app' here, not 'analytics'

