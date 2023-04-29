import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXJi4l0aIndUM4TztEMChawKgkjV_a2Fk",
  authDomain: "my-react-blog-e7962.firebaseapp.com",
  projectId: "my-react-blog-e7962",
  storageBucket: "my-react-blog-e7962.appspot.com",
  messagingSenderId: "70953883756",
  appId: "1:70953883756:web:bda624023f8dab20052049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

