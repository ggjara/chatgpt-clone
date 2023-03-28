import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9oSRpY8GLcCcv5GmkKkQsyX0qJgwEIKc",
    authDomain: "chatgpt-messenger-782f5.firebaseapp.com",
    projectId: "chatgpt-messenger-782f5",
    storageBucket: "chatgpt-messenger-782f5.appspot.com",
    messagingSenderId: "466306966200",
    appId: "1:466306966200:web:db5b601a1497fcb78f8a4d"
  };
  
  // Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
export{ db }