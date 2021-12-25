import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDULuk4k72iE-D7menvSMsfxFidx23wa2A",
  authDomain: "tasklist-ca761.firebaseapp.com",
  projectId: "tasklist-ca761",
  storageBucket: "tasklist-ca761.appspot.com",
  messagingSenderId: "1089687837738",
  appId: "1:1089687837738:web:8bcca3d26b0ec68badf753"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
app = firebase.initializeApp(firebaseConfig)

const database = firebase.firestore();//.settings({ experimentalForceLongPolling: true, merge: true });


export default database;
