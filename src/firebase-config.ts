// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ2ilt_t3N2fI5Kx_zXZBgE6ocSb4NbeE",
  authDomain: "docs-clone-c1b66.firebaseapp.com",
  projectId: "docs-clone-c1b66",
  storageBucket: "docs-clone-c1b66.firebasestorage.app",
  messagingSenderId: "514138485825",
  appId: "1:514138485825:web:58ac7e0f3a92b409b6c2c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)