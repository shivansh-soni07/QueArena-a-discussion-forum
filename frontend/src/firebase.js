// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider ,createUserWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7PlE8J-kSZ7KQlRpTm_62y8GnJedM5cc",
  authDomain: "discussion-forum-29b29.firebaseapp.com",
  projectId: "discussion-forum-29b29",
  storageBucket: "discussion-forum-29b29.appspot.com",
  messagingSenderId: "973530399522",
  appId: "1:973530399522:web:6672a1807862259c9bdb7b",
  measurementId: "G-4DCL9T6M3B"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
 
export { auth,provider };


 