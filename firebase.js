// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqcINbgC9-F7dYojzXXBqChG0AahmJyO4",
    authDomain: "fir-course-63146.firebaseapp.com",
    projectId: "fir-course-63146",
    storageBucket: "fir-course-63146.appspot.com",
    messagingSenderId: "327763583614",
    appId: "1:327763583614:web:277969e582818b536eee2f",
    measurementId: "G-9VQWQFEYEB"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};
