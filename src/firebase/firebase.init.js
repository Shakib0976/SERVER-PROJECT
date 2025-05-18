// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa_fpJ_VqOOl5CClPfk0FV1VSDErO4QJs",
  authDomain: "coffee-store-app-e6b27.firebaseapp.com",
  projectId: "coffee-store-app-e6b27",
  storageBucket: "coffee-store-app-e6b27.firebasestorage.app",
  messagingSenderId: "178018176644",
  appId: "1:178018176644:web:5069dfc3d793a1eb783cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);