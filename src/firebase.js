import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjvnnArZJ5CeRXt7oyQ18Me3qMYa-HgMo",
  authDomain: "admin-dashboard-db6bd.firebaseapp.com",
  projectId: "admin-dashboard-db6bd",
  storageBucket: "admin-dashboard-db6bd.appspot.com",
  messagingSenderId: "1069160977954",
  appId: "1:1069160977954:web:1689a2b4c3381c30f91c7b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);