// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAwz2Gc2VutFy69u1OSUyFthhcgnKS7SA",
    authDomain: "travelguru-1d08d.firebaseapp.com",
    projectId: "travelguru-1d08d",
    storageBucket: "travelguru-1d08d.appspot.com",
    messagingSenderId: "267037671664",
    appId: "1:267037671664:web:edd38e3075237330028235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
