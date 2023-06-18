
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyDbHgJPQNC8ZkSDE9I917Me4msCuiN7wwU",
  authDomain: "tiktok---jornada-8ef88.firebaseapp.com",
  projectId: "tiktok---jornada-8ef88",
  storageBucket: "tiktok---jornada-8ef88.appspot.com",
  messagingSenderId: "620442032253",
  appId: "1:620442032253:web:c0e4d63ec82954aba97914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;