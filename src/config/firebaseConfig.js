import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from '@react-native-firebase/app';
// import firebaseStorage from '@react-native-firebase/storage';
import { APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID} from '@env';

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//app = firebase.initializeApp(firebaseConfig)
const app = firebase.initializeApp(firebaseConfig)
const database = firebase.firestore();
//const database = firebase.firestore();//.settings({ experimentalForceLongPolling: true, merge: true });


export default database;
