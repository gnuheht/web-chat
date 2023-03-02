
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDONYNHU-gQcxFPjdRoYE2Be83Hljgp0UQ",
  authDomain: "web-chat-c7326.firebaseapp.com",
  databaseURL: "https://web-chat-c7326-default-rtdb.firebaseio.com",
  projectId: "web-chat-c7326",
  storageBucket: "web-chat-c7326.appspot.com",
  messagingSenderId: "8257622187",
  appId: "1:8257622187:web:4124725fbb5e5cd8ea67ee",
  measurementId: "G-53Z8N5QF5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push, onValue }
