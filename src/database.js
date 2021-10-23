// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8kgF7lee-77fE_USJMNQoVdhX9G-hIZ0",
  authDomain: "hackgt-8-5e42a.firebaseapp.com",
  projectId: "hackgt-8-5e42a",
  storageBucket: "hackgt-8-5e42a.appspot.com",
  messagingSenderId: "691774307474",
  appId: "1:691774307474:web:188e90886bc2092816fa4b"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();