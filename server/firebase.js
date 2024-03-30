const { initializeApp } = require("firebase/app");
const {
  getDatabase,
  ref,
  child,
  get,
  onValue,
  set,
  push,
} = require("firebase/database");

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCjHdELmBXbvrbR_KotkojBdkPNU65LuuQ",
  authDomain: "trixon-675bc.firebaseapp.com",
  databaseURL: "https://trixon-675bc-default-rtdb.firebaseio.com",
  projectId: "trixon-675bc",
  storageBucket: "trixon-675bc.appspot.com",
  messagingSenderId: "78730342571",
  appId: "1:78730342571:web:78a8e5caa1d4cfcd9487ee",
};

// initializeApp(FIREBASE_CONFIG);

// const db = getFirestore();

const app = initializeApp(FIREBASE_CONFIG);
const db = getDatabase(app);

module.exports = { db, ref, child, get, onValue, set, push };
