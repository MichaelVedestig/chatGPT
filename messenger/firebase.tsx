import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvdSx6W5FABmV0OpnH8xvFJN7Q0UWyi9g",
  authDomain: "salt-chatgpt.firebaseapp.com",
  projectId: "salt-chatgpt",
  storageBucket: "salt-chatgpt.appspot.com",
  messagingSenderId: "1000204074274",
  appId: "1:1000204074274:web:cd9b27d89c13a90d51397b",
  measurementId: "G-L74EM6CNKL"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };