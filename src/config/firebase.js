// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaNdSTWKpBFzAI1tWi7nNpwOnE63DsyYY",
  authDomain: "treinamento-clinicorp-larissa.firebaseapp.com",
  projectId: "treinamento-clinicorp-larissa",
  storageBucket: "treinamento-clinicorp-larissa.appspot.com",
  messagingSenderId: "336588502197",
  appId: "1:336588502197:web:9524ffe0306fc548bf3afc",
  measurementId: "G-W9H4C5G6DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);