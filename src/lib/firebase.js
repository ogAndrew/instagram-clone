import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import seed file 
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBIx7Xg3IVSU7qSvK50J0pQ43HAGPURzRg",
  authDomain: "instagram-andrew.firebaseapp.com",
  projectId: "instagram-andrew",
  storageBucket: "instagram-andrew.appspot.com",
  messagingSenderId: "288244160183",
  appId: "1:288244160183:web:d4b27d8a7fe5adb59f5f32",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call the seed function only once for firestore db
// seedDatabase(firebase);

export { firebase, FieldValue };
