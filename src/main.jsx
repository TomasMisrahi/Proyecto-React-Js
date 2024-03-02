import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcQXcgiyzV048xl5s2Y39zs1VLqlxlKEs",
  authDomain: "react-js-e-commerce-8466d.firebaseapp.com",
  projectId: "react-js-e-commerce-8466d",
  storageBucket: "react-js-e-commerce-8466d.appspot.com",
  messagingSenderId: "511154247645",
  appId: "1:511154247645:web:8f8f4c730a020804654834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
)

