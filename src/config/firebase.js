import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBie8CPp9zWE0PffIMBEHLp3e_EFyEf2Hs",
  authDomain: "numerics-b3686.firebaseapp.com",
  databaseURL: "https://numerics-b3686.firebaseio.com",
  projectId: "numerics-b3686",
  storageBucket: "numerics-b3686.appspot.com",
  messagingSenderId: "627379690491",
  appId: "1:627379690491:web:a14726eed81045496bc95e",
};

firebase.initializeApp(firebaseConfig);
export default firebase;