import  firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCJwh51rfgLUw5XLinX0b25Ml9PEstbBuE",
    authDomain: "linkedin-clone-24d7f.firebaseapp.com",
    projectId: "linkedin-clone-24d7f",
    storageBucket: "linkedin-clone-24d7f.appspot.com",
    messagingSenderId: "86486198755",
    appId: "1:86486198755:web:2981e6d53e8c3547fa58d6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseDb = firebaseApp.firestore();
const firebaseAuth = firebase.auth();

export {firebaseDb,firebaseAuth}