import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import firebase from 'firebase/compat/app';
import { getStorage} from "firebase/storage";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyD4UfaWCpm6zvv3HLYBAsxKXD-l6s5fz1U",
  authDomain: "protek-chat.firebaseapp.com",
  projectId: "protek-chat",
  storageBucket: "protek-chat.appspot.com",
  messagingSenderId: "657614601838",
  appId: "1:657614601838:web:e51710c48f96edf808707f",
  measurementId: "G-SM1FL3P0CJ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const Context = createContext(null);

const firestore = firebase.firestore();
const storage = getStorage(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    firestore,
    storage
  }}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context.Provider>
);

