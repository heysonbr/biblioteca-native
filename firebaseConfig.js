import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {
  FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID,
  FIREBASE_AUTH_URI,
  FIREBASE_TOKEN_URI,
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_CLIENT_X509_CERT_URL,
} from "@env";

const firebaseConfig = {
  apiKey: "AIzaSyANNP--T4XJl6aGdG_MFhS40jlXCx9ABhY",
  authDomain: "books1-a5253.firebaseapp.com",
  projectId: "books1-a5253",
  storageBucket: "gs://books1-a5253.appspot.com",
  messagingSenderId: "440107021536",
  appId: "440107021536",
};

// console.log("Configuración de Firebase: ", firebaseConfig);
initializeApp(firebaseConfig);

const db = getFirestore();

const storage = getStorage();

export { storage };
export { db };
