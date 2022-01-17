import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export let config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

// OLD
// firebase.initializeApp(config);
// firebase.firestore();
// export default firebase;

// NEW
firebase.initializeApp(config);
export default firebase;
export const Auth = firebase.auth();
export const Firestore = firebase.firestore();