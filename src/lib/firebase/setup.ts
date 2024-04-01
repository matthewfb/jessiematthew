import { initializeApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getStorage, ref } from "firebase/storage";

const envVariables = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
};

console.table(envVariables);

const firebaseConfig: FirebaseOptions = {
  apiKey: envVariables.apiKey,
  authDomain: envVariables.authDomain,
  projectId: envVariables.projectId,
  storageBucket: envVariables.storageBucket,
  messagingSenderId: envVariables.messagingSenderId,
  appId: envVariables.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const Firestore = getFirestore(app);

const storage = getStorage();

export { storage, Firestore };
