// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzPwGeLeaBWvImsjGyZW74UDxH7oRn9zM",
  authDomain: "selim-store-authcontext.firebaseapp.com",
  projectId: "selim-store-authcontext",
  storageBucket: "selim-store-authcontext.appspot.com",
  messagingSenderId: "842960338129",
  appId: "1:842960338129:web:98fc143040d48dd22959f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
