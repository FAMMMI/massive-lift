// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6apoxiJLwJgj0Ki5jU-o6axjkUsHW29Q",
    authDomain: "assignment-ten-1260c.firebaseapp.com",
    projectId: "assignment-ten-1260c",
    storageBucket: "assignment-ten-1260c.appspot.com",
    messagingSenderId: "62630104923",
    appId: "1:62630104923:web:661822e9fd01e14913d47e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
