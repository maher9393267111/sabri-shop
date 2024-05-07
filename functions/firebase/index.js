// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
 
  apiKey: "AIzaSyD_Eub_0yK8fx_ZuWvLTFu6S2bgVoYeB7M",
  authDomain: "mern-4dbe9.firebaseapp.com",
  databaseURL: "https://mern-4dbe9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mern-4dbe9",
  storageBucket: "mern-4dbe9.appspot.com",
  messagingSenderId: "455005923505",
  appId: "1:455005923505:web:e91b064422d11f2222da90",
  measurementId: "G-0M72R7PYK6"


  // apiKey: "AIzaSyBI7p9VcmEmdtogk3GqjUNIrz_kNT1u14g",
  // authDomain: "precise-reality-324621.firebaseapp.com",
  // databaseURL: "https://precise-reality-324621-default-rtdb.firebaseio.com",
  // projectId: "precise-reality-324621",
  // storageBucket: "precise-reality-324621.appspot.com",
  // messagingSenderId: "671790327953",
  // appId: "1:671790327953:web:8e0f22b2ea69d2cc347730",
  // measurementId: "G-TBEJLSK4SL"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);

export default firestoreDatabase;

export const provider =  new GoogleAuthProvider()