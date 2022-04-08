// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { collection, getFirestore } from "firebase/firestore";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjmksacmJ7wol2hIyqqs_CTEhFtZI1YCc",
  authDomain: "reactjs-ch.firebaseapp.com",
  projectId: "reactjs-ch",
  storageBucket: "reactjs-ch.appspot.com",
  messagingSenderId: "224883041883",
  appId: "1:224883041883:web:6ab211422c8e2b999b017e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//method to return firestore database with config
const getFirestoreDb = () => {
    return getFirestore(app)
}

//method to return collection
const getCollection = (db, path) => {
  return collection(db,path)
}

export {
    app,
    getFirestoreDb,
    getCollection
}