import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDW60isg46C4vQiMSk9_ni23B564abnW6c",
    authDomain: "crwn-db-d506b.firebaseapp.com",
    projectId: "crwn-db-d506b",
    storageBucket: "crwn-db-d506b.appspot.com",
    messagingSenderId: "658845547843",
    appId: "1:658845547843:web:31b8a66a1e4898d28f83f6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;