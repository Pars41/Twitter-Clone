// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhsninfSFX6zYUlfWVaz1NqULAvqhWC7M",
  authDomain: "twitter-clone-7ac65.firebaseapp.com",
  projectId: "twitter-clone-7ac65",
  storageBucket: "twitter-clone-7ac65.appspot.com",
  messagingSenderId: "884429741928",
  appId: "1:884429741928:web:790c7be4e0ce906d01c0dd",
  measurementId: "G-TFX9V61JG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;

// import firebase from "firebase";
// import "firebase/database";
// const firebaseConfig = {
//   apiKey: "AIzaSyAhsninfSFX6zYUlfWVaz1NqULAvqhWC7M",
//   authDomain: "twitter-clone-7ac65.firebaseapp.com",
//   projectId: "twitter-clone-7ac65",
//   storageBucket: "twitter-clone-7ac65.appspot.com",
//   messagingSenderId: "884429741928",
//   appId: "1:884429741928:web:790c7be4e0ce906d01c0dd",
//   measurementId: "G-TFX9V61JG8",
// };

//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

// const db = firebase.firestore();

// export default db;
