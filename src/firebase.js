// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
    apiKey: "AIzaSyDlyEoXbsbEjVbfpcrTPvili8Hgghj7qjw",
    authDomain: "deakindev-22ce9.firebaseapp.com",
    projectId: "deakindev-22ce9",
    storageBucket: "deakindev-22ce9.appspot.com",
    messagingSenderId: "137025586485",
    appId: "1:137025586485:web:515ef4f3db60a47c56f87c",
    measurementId: "G-YG8TPDZJXN",
    databseURL: "https://deakindev-22ce9-default-rtdb.firebaseio.com/"
  })
  
  export const auth = app.auth()
  export default app