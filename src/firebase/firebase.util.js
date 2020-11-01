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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
        }
        catch(error){
            console.log('error creating user', error.message);
        }
      }

      return userRef;
  }

  export const addCollectionAndDocuments = async (collectionName, documentsToAdd) => {
      const collectionRef = firestore.collection(collectionName);
      const batch = firestore.batch();
      documentsToAdd.forEach( doc => {
          const newDocRef = collectionRef.doc(doc.title);
          batch.set(newDocRef, doc);
      });

      return await batch.commit();
  };

  export const convertCollectionSnapshotToMap = (collections) =>{
      const transformedCollections = collections.docs.map( doc => {
        const {title, items} = doc.data();
        return {
          routeName : encodeURI(title.toLowerCase()),
          id: doc.id,
          title,
          items
        }
      });

      return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      },{});
  };

  export default firebase;