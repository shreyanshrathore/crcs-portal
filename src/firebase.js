import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import {  getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCP5W06XCZfhNBNskZssIy6P4BTCq2C8XI",
    authDomain: "crcs-fe116.firebaseapp.com",
    projectId: "crcs-fe116",
    storageBucket: "crcs-fe116.appspot.com",
    messagingSenderId: "1054797448845",
    appId: "1:1054797448845:web:b8d53e293a139e54ab44c4"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();  
export const storage = getStorage();
export const db = getFirestore();


