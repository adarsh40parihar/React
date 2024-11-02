// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//auth import -> Step-1
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGFbWyZFVapj9T7zbPg9FKeIE1jCzS8EE",
  authDomain: "wa-clone-aed2b.firebaseapp.com",
  projectId: "wa-clone-aed2b",
  storageBucket: "wa-clone-aed2b.appspot.com",
  messagingSenderId: "175782022053",
  appId: "1:175782022053:web:2ec1a9b3cd5ff78341764c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth import -> Step-2
const auth = getAuth(app);

export { auth }; // Export the auth object
