// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRvszfC1iNiCtXkYevfcS8kksyy8ILwyo",
  authDomain: "tutorio-client.firebaseapp.com",
  projectId: "tutorio-client",
  storageBucket: "tutorio-client.appspot.com",
  messagingSenderId: "578376057693",
  appId: "1:578376057693:web:cb767f330f7f2accca1eb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;