import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhsninfSFX6zYUlfWVaz1NqULAvqhWC7M",
  authDomain: "twitter-clone-7ac65.firebaseapp.com",
  projectId: "twitter-clone-7ac65",
  storageBucket: "twitter-clone-7ac65.appspot.com",
  messagingSenderId: "884429741928",
  appId: "1:884429741928:web:790c7be4e0ce906d01c0dd",
  measurementId: "G-TFX9V61JG8",
};



firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db



