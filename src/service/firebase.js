// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk1r6avx5oEeTnPnW6jVQZ1aKHIAacEYM",
  authDomain: "projeto-guiado-d20c6.firebaseapp.com",
  projectId: "projeto-guiado-d20c6",
  storageBucket: "projeto-guiado-d20c6.appspot.com",
  messagingSenderId: "322776703056",
  appId: "1:322776703056:web:c627381659b47051377155",
  databaseURL:'https://projeto-guiado-d20c6-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase()

export{database}