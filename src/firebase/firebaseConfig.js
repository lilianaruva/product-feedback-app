// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQJfxLHcGNh3XMqBA5rOpxZfAV-92pSHs",
  authDomain: "product-feedback-app-8c443.firebaseapp.com",
  projectId: "product-feedback-app-8c443",
  storageBucket: "product-feedback-app-8c443.appspot.com",
  messagingSenderId: "474996571724",
  appId: "1:474996571724:web:498a5df1d4af8612643ee9",
  measurementId: "G-9JKKXT1WNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
const db = getFirestore(app);

//detect auth state
/*onAuthStateChanged(auth, user => {
  if(user!= null){
    console.log("log in");
  }
  else{
    console.log("no user");
  }
});
*/
export default db;
