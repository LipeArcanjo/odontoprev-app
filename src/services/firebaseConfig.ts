import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth } from 'firebase/auth';
// import {...} from 'firebase/database';
import { getFirestore  } from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCNMYGXG94ghulUHWzsfa9HzqZWjuAnMV0",
  authDomain: "bytergf-mobile.firebaseapp.com",
  projectId: "bytergf-mobile",
  storageBucket: "bytergf-mobile.firebasestorage.app",
  messagingSenderId: "577338467839",
  appId: "1:577338467839:web:f2d895dddfcb623bc7f3ca",
  measurementId: "G-CCSDRCLHQS"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
