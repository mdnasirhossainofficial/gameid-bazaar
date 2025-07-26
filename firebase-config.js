// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvnReqxIEGRwWfRZjwr4oJgPGwWLtATKU",
  authDomain: "bismillah-telecom-ed960.firebaseapp.com",
  databaseURL: "https://bismillah-telecom-ed960-default-rtdb.firebaseio.com",
  projectId: "bismillah-telecom-ed960",
  storageBucket: "bismillah-telecom-ed960.appspot.com",
  messagingSenderId: "163310183508",
  appId: "1:163310183508:web:036a2421c0cd3c264079c1",
  measurementId: "G-J86C7BKL10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
