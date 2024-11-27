// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyB653mnPDmoxPn6BfxMy2HQIIYv1jD61_0",

    authDomain: "vue-firebase-de055.firebaseapp.com",

    projectId: "vue-firebase-de055",

    storageBucket: "vue-firebase-de055.firebasestorage.app",

    messagingSenderId: "724022485991",

    appId: "1:724022485991:web:012ff6b138e16e839b9342"

};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db };