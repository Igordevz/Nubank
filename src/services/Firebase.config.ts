import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDZkQL3FBIkz0qCwoaLetYtcLYDd7p_gjQ",
  authDomain: "nubank-918d0.firebaseapp.com",
  projectId: "nubank-918d0",
  storageBucket: "nubank-918d0.appspot.com",
  messagingSenderId: "346969838627",
  appId: "1:346969838627:web:5ee157447a1be2d13acd96"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)