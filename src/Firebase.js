import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq1n9x-VKeJsDpyWf_AdO4dCZQAszO1QQ",
  authDomain: "clone---front-end-b3922.firebaseapp.com",
  projectId: "clone---front-end-b3922",
  storageBucket: "clone---front-end-b3922.appspot.com",
  messagingSenderId: "316633285833",
  appId: "1:316633285833:web:38c9c71c77fdb4c7fc7918",
  measurementId: "G-TX9RSXP6LK",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth =firebase.auth();
const db =app.firestore();
export {db , auth};
