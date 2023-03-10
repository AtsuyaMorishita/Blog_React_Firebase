import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKupqvL3y0TJyc66SV7SJebkY3Xr0gNWE",
  authDomain: "blog-91fde.firebaseapp.com",
  projectId: "blog-91fde",
  storageBucket: "blog-91fde.appspot.com",
  messagingSenderId: "1003754886192",
  appId: "1:1003754886192:web:0b67e6c0eb9b827c4cc9f5",
};

//firebaseの初期化
const app = initializeApp(firebaseConfig);

//認証の初期化
const auth = getAuth(app);

//インスタンス化
const provider = new GoogleAuthProvider();

//Cloud Firestoreの初期化
const db = getFirestore(app);

export { auth, provider, db };
