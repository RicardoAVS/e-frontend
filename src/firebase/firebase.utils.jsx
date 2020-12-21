import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCn3t7xKW3yZdUwAlNts4v-FPCndsqztd4",
  authDomain: "sapient-index-299100.firebaseapp.com",
  projectId: "sapient-index-299100",
  storageBucket: "sapient-index-299100.appspot.com",
  messagingSenderId: "387401820661",
  appId: "1:387401820661:web:dba3356b548eb8f9a618bc",
  measurementId: "G-JE9T8NG7RL"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

