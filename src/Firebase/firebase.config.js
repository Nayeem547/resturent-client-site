// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2p-DTc10Ak4zcuOMX6qTENR6qSALjxsA",
  authDomain: "resturent-users.firebaseapp.com",
  projectId: "resturent-users",
  storageBucket: "resturent-users.appspot.com",
  messagingSenderId: "614881210487",
  appId: "1:614881210487:web:fe5502db8944d1fef99672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;