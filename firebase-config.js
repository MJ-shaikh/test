// Firebase SDK

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config

const firebaseConfig = {
  apiKey: "AIzaSyAGZ_BYR2hPlxyY7wjpEA1yeBTxpubCnUI",
  authDomain: "nhipmpl-95d36.firebaseapp.com",
  projectId: "nhipmpl-95d36",
  storageBucket: "nhipmpl-95d36.firebasestorage.app",
  messagingSenderId: "559744005746",
  appId: "1:559744005746:web:deea0954cdc7f1f7dff4eb",
  measurementId: "G-L9B4EKPHVX"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Services

const auth = getAuth(app);

const db = getFirestore(app);

// Export

export { auth, db };
