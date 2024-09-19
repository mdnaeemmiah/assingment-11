// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5gZyAdp8BHBAEtmtDb5elquKc0phWeT0",
  authDomain: "simple-firebase-e56ea.firebaseapp.com",
  projectId: "simple-firebase-e56ea",
  storageBucket: "simple-firebase-e56ea.appspot.com",
  messagingSenderId: "687133913088",
  appId: "1:687133913088:web:eac0f675d5ba87fbc428e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;