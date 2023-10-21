import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtPd8kkXyvYkbue8SI5B7j_qdtSYXCOso",
  authDomain: "westjakartarentals.firebaseapp.com",
  projectId: "westjakartarentals",
  storageBucket: "westjakartarentals.appspot.com",
  messagingSenderId: "119537888348",
  appId: "1:119537888348:web:9b1b0778d55c43ebbfca99",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
