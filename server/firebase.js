import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  get,
  query,
  startAt,
  endAt,
  orderByChild,
  equalTo,
  orderByValue,
} from 'firebase/database';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCjHdELmBXbvrbR_KotkojBdkPNU65LuuQ',
  authDomain: 'trixon-675bc.firebaseapp.com',
  databaseURL: 'https://trixon-675bc-default-rtdb.firebaseio.com',
  projectId: 'trixon-675bc',
  storageBucket: 'trixon-675bc.appspot.com',
  messagingSenderId: '78730342571',
  appId: '1:78730342571:web:78a8e5caa1d4cfcd9487ee',
};

const app = initializeApp(FIREBASE_CONFIG);

export { getDatabase, ref, onValue, push, set, get, query, startAt, endAt, orderByChild, equalTo, orderByValue };
