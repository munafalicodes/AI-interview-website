
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "interviewiq-ba6ba.firebaseapp.com",
//   projectId: "interviewiq-ba6ba",
//   storageBucket: "interviewiq-ba6ba.firebasestorage.app",
//   messagingSenderId: "862159592601",
//   appId: "1:862159592601:web:7308d702cd708076ddec08"
// };




// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterview-47cdf.firebaseapp.com",
  projectId: "aiinterview-47cdf",
  storageBucket: "aiinterview-47cdf.firebasestorage.app",
  messagingSenderId: "923614402112",
  appId: "1:923614402112:web:1008a81505ee6b7e8731a5",
  measurementId: "G-KC37S9EF21"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);







const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }