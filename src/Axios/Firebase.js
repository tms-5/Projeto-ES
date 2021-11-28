import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkcy8YJ4X6qtbccB-GGVJW-JeZUNNHrTc",
  authDomain: "projeto-es-if977.firebaseapp.com",
  databaseURL: "https://projeto-es-if977-default-rtdb.firebaseio.com",
  projectId: "projeto-es-if977",
  storageBucket: "projeto-es-if977.appspot.com",
  messagingSenderId: "512620145546",
  appId: "1:512620145546:web:ee02f5f4f1735377427673",
  measurementId: "G-N3GPTH5VLP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
