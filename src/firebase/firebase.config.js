// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLMJ1UYtLXsdPzNGToRLct9pWVUZOV71E",
  authDomain: "game-hub-d1fef.firebaseapp.com",
  projectId: "game-hub-d1fef",
  storageBucket: "game-hub-d1fef.firebasestorage.app",
  messagingSenderId: "182100789933",
  appId: "1:182100789933:web:ceff4b4bb5834d1db3d424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);