import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCfuAjmQRhgH43gHc_T6HBLH26tmCDRjIE",
  authDomain: "erpcia.firebaseapp.com",
  databaseURL: "https://erpcia.firebaseio.com",
  projectId: "erpcia",
  storageBucket: "erpcia.appspot.com",
  messagingSenderId: "857497858486",
  appId: "1:857497858486:web:fb34258ac7726ef8509117",
  measurementId: "G-GS6RTLNJ3E",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
