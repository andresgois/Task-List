import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { 
  APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID
} from '@env';

const firebaseApp = initializeApp({
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID
});

// Initialize Firebase
// if(!firebase.apps.length)
//   firebase.initializeApp(firebaseConfig)

// const database = firebase.firestore();
// export default database
const database = getFirestore();

export default database;
