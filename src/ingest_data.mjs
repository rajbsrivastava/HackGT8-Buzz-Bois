// Import the functions you need from the SDKs you need
import firebase from 'firebase/app/dist/index.cjs.js';
import 'firebase/firestore/dist/index.node.cjs.js';
import 'firebase/functions/dist/index.cjs.js';
import neatCsv from 'neat-csv';
import * as fs from 'fs';


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
const db = firebaseApp.firestore();
fs.readFile("../givewell_data.csv", (error, data) => {
  if (error) {
    console.log("huh"); console.log(error)
  }
  else {
    console.log('no error')
  neatCsv(data).then((parsedData) => {
    // add to firestore:
    for (const charity of parsedData) {
      db.collection("charities").add(charity)
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }
  });
  }
})
