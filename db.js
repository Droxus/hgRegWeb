// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwTbTG_auMrWy_e4aVUFMHs3794zZ4AXE",
  authDomain: "hgregusersdb.firebaseapp.com",
  projectId: "hgregusersdb",
  storageBucket: "hgregusersdb.appspot.com",
  messagingSenderId: "996459139126",
  appId: "1:996459139126:web:ca1d5184f0f5db61618897",
  measurementId: "G-LMF2MVSGER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
