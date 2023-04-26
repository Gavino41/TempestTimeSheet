// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNpIdPtAJsp4_JTDaJ7XP3fz-2IlSL7Eg",
  authDomain: "tempesttimesheet.firebaseapp.com",
  projectId: "tempesttimesheet",
  storageBucket: "tempesttimesheet.appspot.com",
  messagingSenderId: "21006635666",
  appId: "1:21006635666:web:9f0abc1142246eb3fbcc4b",
  measurementId: "G-QNYQR4GJFN"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };

const analytics = getAnalytics(app);