import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2hb4RstbiNubMs1IppE9g6kXMAB0th8M",
  authDomain: "imager-254.firebaseapp.com",
  projectId: "imager-254",
  storageBucket: "imager-254.appspot.com",
  messagingSenderId: "1004958546908",
  appId: "1:1004958546908:web:c9aeafd65588474dd2ed19",
  measurementId: "G-S12H0RH9X3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const storage = firebaseApp.storage();
firebase.analytics();

export { storage, database, firebase as default };
