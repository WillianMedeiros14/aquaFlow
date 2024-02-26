// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASIkv5djpn2ucnhYc8VKPTPERF7-0IK_E",
  authDomain: "aquaflow-f57b6.firebaseapp.com",
  projectId: "aquaflow-f57b6",
  storageBucket: "aquaflow-f57b6.appspot.com",
  messagingSenderId: "265601486195",
  appId: "1:265601486195:web:f7b6d9c84d000eccf5c906",
  measurementId: "G-8JTP22QK95",
};

// if (!getApps().length) {
//   initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// }

const auth = getAuth();

const db = getFirestore(app);

export {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  db,
  collection,
  addDoc,
};
