import Firebase from "firebase";

const FirebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyCLdwvYAfcG3GDKAoCvx8ox0XVyLwmBUg4",
  authDomain: "clone-a20fd.firebaseapp.com",
  projectId: "clone-a20fd",
  storageBucket: "clone-a20fd.appspot.com",
  messagingSenderId: "84788793878",
  appId: "1:84788793878:web:e4ebc646b30ae5345a5b37",
  measurementId: "G-6VDC8JN63W",
});

const db = FirebaseApp.firestore();
const auth = Firebase.auth();

export { db, auth };
