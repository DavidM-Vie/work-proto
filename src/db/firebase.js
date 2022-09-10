// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANWFT637fN576KW1aEMZfVxw_RVHvR4yQ",
  authDomain: "work-proto-47e5a.firebaseapp.com",
  projectId: "work-proto-47e5a",
  storageBucket: "work-proto-47e5a.appspot.com",
  messagingSenderId: "879439218803",
  appId: "1:879439218803:web:4f242657ad5882035bc206"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;