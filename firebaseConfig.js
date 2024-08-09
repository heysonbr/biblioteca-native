import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
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
  projectId: FIREBASE_PROJECT_ID,
  privateKeyId: FIREBASE_PRIVATE_KEY_ID,
  privateKey: FIREBASE_PRIVATE_KEY,
  clientEmail: FIREBASE_CLIENT_EMAIL,
  clientId: FIREBASE_CLIENT_ID,
  authUri: FIREBASE_AUTH_URI,
  tokenUri: FIREBASE_TOKEN_URI,
  authProviderX509CertUrl: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  clientX509CertUrl: FIREBASE_CLIENT_X509_CERT_URL,
  storageBucket: "gs://books1-a5253.appspot.com",
};

// console.log("Configuración de Firebase: ", firebaseConfig);

let Firebase;
if (!getApps().length) {
  Firebase = initializeApp(firebaseConfig);
  // console.log("Firebase inicializado");
} else {
  Firebase = getApps()[0]; // si ya está inicializado, usa la instancia existente
  console.log("Firebase ya estaba inicializado");
}

const storage = getStorage(Firebase);

export default Firebase;
export { storage };
