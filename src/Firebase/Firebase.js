// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVWEF-pzOsGEVKyMBZErfOzCVvBngOoQI",
  authDomain: "cryptlite-63676.firebaseapp.com",
  projectId: "cryptlite-63676",
  storageBucket: "cryptlite-63676.appspot.com",
  messagingSenderId: "13393679485",
  appId: "1:13393679485:web:03699e001e17cacd76cd14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);