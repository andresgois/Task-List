import firebase from 'firebase';
import 'firebase/storage';

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
if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig)

const database = firebase.firestore();
export default database
