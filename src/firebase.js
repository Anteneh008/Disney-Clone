import firebase from "firebase/compat/app"; //This package provides functionalities to interact with Firebase services.
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8OuixSCdgm4d_aHkTU1Mtkg8Pybz7CyQ",
  authDomain: "disney-clone-23608.firebaseapp.com",
  projectId: "disney-clone-23608",
  storageBucket: "disney-clone-23608.appspot.com",
  messagingSenderId: "876067834742",
  appId: "1:876067834742:web:d9c157b8dc41a6c8ff4857",
  measurementId: "G-1XM265KNE9",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize the Firebase app with the provided configuration. This sets up the connection to the Firebase project using the specified configuration.
const db = firebaseApp.firestore(); //It will be used to interact with the Firebase Realtime Database
const auth = firebase.auth(); //t will be used for user authentication and handling authentication-related operations
const provider = new firebase.auth.GoogleAuthProvider(); //Create a GoogleAuthProvider object. This is used for Google sign-in authentication
const storage = firebase.storage(); //It will be used for uploading and managing files in the Firebase Storage

export { auth, provider, storage }; //objects so that other parts of the application can access and use them

export default db;
