import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvAOQErUE41jptbJQx4YxPMTbXqWm1Zn4",
    authDomain: "cart-project-81e5e.firebaseapp.com",
    projectId: "cart-project-81e5e",
    storageBucket: "cart-project-81e5e.appspot.com",
    messagingSenderId: "484290209618",
    appId: "1:484290209618:web:067468d0df0dfc4ccbfc8b"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;