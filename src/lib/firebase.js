import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaeVJm3hL3djYLealTdwzU6BNSvV4XSM8",
  authDomain: "caclasa.firebaseapp.com",
  projectId: "caclasa",
  storageBucket: "caclasa.appspot.com",
  messagingSenderId: "1034643298894",
  appId: "1:1034643298894:web:f0587c6a9c7b0e9654411f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
