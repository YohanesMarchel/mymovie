// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfqy5S796--Z9lzf1rpISAKks4IwpQw_M",
  authDomain: "mymovie-4f4d4.firebaseapp.com",
  projectId: "mymovie-4f4d4",
  storageBucket: "mymovie-4f4d4.appspot.com",
  messagingSenderId: "25042124245",
  appId: "1:25042124245:web:aae1ba9e57a67692b2915c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);