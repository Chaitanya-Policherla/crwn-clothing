import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIeVd7kkoI_nxonqiAoLTsBN8-0RK-mio",
    authDomain: "crwn-db-44c0e.firebaseapp.com",
    databaseURL: "https://crwn-db-44c0e.firebaseio.com",
    projectId: "crwn-db-44c0e",
    storageBucket: "crwn-db-44c0e.appspot.com",
    messagingSenderId: "337857822960",
    appId: "1:337857822960:web:1f1e15f7f3d0bcd4edc235",
    measurementId: "G-3LKFQKZD8Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;