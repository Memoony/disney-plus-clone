import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyABQJvHX1x87AfCC8oMebDLjLp28id3nLc",
    authDomain: "disneyplus-clone-22088.firebaseapp.com",
    projectId: "disneyplus-clone-22088",
    storageBucket: "disneyplus-clone-22088.appspot.com",
    messagingSenderId: "940640436581",
    appId: "1:940640436581:web:c43ac6a8d73e23e1e6618c",
    measurementId: "G-MMLVL62CC2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;