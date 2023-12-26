import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-guitarras-facu.firebaseapp.com",
  projectId: "tienda-guitarras-facu",
  storageBucket: "tienda-guitarras-facu.appspot.com",
  messagingSenderId: "463603827766",
  appId: "1:463603827766:web:dbaa8b6099a0b584b60497"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);