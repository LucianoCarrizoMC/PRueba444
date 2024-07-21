import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHqMFyW7rLYX0Ucy9I2qgpZfIcGPu5Ol4",
  authDomain: "ultimollamado-e9592.firebaseapp.com",
  projectId: "ultimollamado-e9592",
  storageBucket: "ultimollamado-e9592.appspot.com",
  messagingSenderId: "386539320733",
  appId: "1:386539320733:web:5724604123a01ea455ab74",
  measurementId: "G-L9C4KV506R"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
