// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC1GlnrFBH9mhRSUN2T-EYAgbZeoXG1Bg",
  authDomain: "development-meeblog.firebaseapp.com",
  projectId: "development-meeblog",
  storageBucket: "development-meeblog.appspot.com",
  messagingSenderId: "1044610495485",
  appId: "1:1044610495485:web:10ce5ab9b96689a92fdf94",
  measurementId: "G-Y6BCLKPHY5",
  storageBucket: "gs://development-meeblog.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);