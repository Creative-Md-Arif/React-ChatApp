/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7k0qQ3JVSKZfv4cyAZM5L81aDU99Pg1w",
  authDomain: "react-chatapp-700dd.firebaseapp.com",
  projectId: "react-chatapp-700dd",
  storageBucket: "react-chatapp-700dd.appspot.com",
  messagingSenderId: "1046697848666",
  appId: "1:1046697848666:web:c366603af96f0fb9d08d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;