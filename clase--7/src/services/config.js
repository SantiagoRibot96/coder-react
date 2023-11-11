import { initializeApp } from "firebase/app";       //se utiliza para inicializar la conexion con firebase
import { getFirestore } from "firebase/firestore";  //se utiliza para obtener una instancia de firestore

/* FIRESTORE: Es uno de los servicios que brinda firebase para poder crear y manipular bases de datos dinamicas */

const firebaseConfig = {
  apiKey: "AIzaSyDvFGxbKzw_0HHochmMpI7-Nzd0Nt31hjU",
  authDomain: "clase--7.firebaseapp.com",
  projectId: "clase--7",
  storageBucket: "clase--7.appspot.com",
  messagingSenderId: "275497839594",
  appId: "1:275497839594:web:b79a9ba464ae73b34d6093"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);