import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCc0rclpltLUOqHkgql_mJcKHpCG3nRF5E",
  authDomain: "slack-clone-v1.firebaseapp.com",
  projectId: "slack-clone-v1",
  storageBucket: "slack-clone-v1.appspot.com",
  messagingSenderId: "963564600839",
  appId: "1:963564600839:web:297624d8a499d2345cb4a2",
  measurementId: "G-YFRHZFTWGH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
