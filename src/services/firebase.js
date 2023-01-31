import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCvXKcQeSjH1_J0cqmxWkNU5uH5o9A4JDU",
  authDomain: "react-coder-5f128.firebaseapp.com",
  projectId: "react-coder-5f128",
  storageBucket: "react-coder-5f128.appspot.com",
  messagingSenderId: "513312622987",
  appId: "1:513312622987:web:ddab552f1209bf5a5d078e",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
