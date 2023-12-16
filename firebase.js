// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  // GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQR6kN9kR6FPb-VhU0Axotat-k2lS1GBk",
  authDomain: "react-native-projects-719f4.firebaseapp.com",
  projectId: "react-native-projects-719f4",
  storageBucket: "react-native-projects-719f4.appspot.com",
  messagingSenderId: "70341277607",
  appId: "1:70341277607:web:60fd797e7c00a022f6a882",
  measurementId: "G-D0Z5BG18XR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// const provider = new GoogleAuthProvider();

export const fireAppDb = getFirestore(app)
