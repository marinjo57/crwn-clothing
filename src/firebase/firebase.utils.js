import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPtYdaw7oI55sYUNDB4hNNIRZ50V42-r0",
    authDomain: "crwn-db-1bb70.firebaseapp.com",
    databaseURL: "https://crwn-db-1bb70.firebaseio.com",
    projectId: "crwn-db-1bb70",
    storageBucket: "crwn-db-1bb70.appspot.com",
    messagingSenderId: "724206168078",
    appId: "1:724206168078:web:1e0c0d7ca39f3a842fb45f",
    measurementId: "G-VBXYTK7DZ0"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
