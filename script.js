// Firebase Import (CDN ব্যবহার করব index.html এ)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

// ✅ Firebase Config (তোমার দেওয়া)
const firebaseConfig = {
  apiKey: "AIzaSyCkHH8U_zgWQ01SLLhqrnxhe8j6KjnM9Q0",
  authDomain: "bismillah-telecom-ed960.firebaseapp.com",
  databaseURL: "https://bismillah-telecom-ed960-default-rtdb.firebaseio.com",
  projectId: "bismillah-telecom-ed960",
  storageBucket: "bismillah-telecom-ed960.appspot.com",
  messagingSenderId: "163310183508",
  appId: "1:163310183508:web:036a2421c0cd3c264079c1"
};

// ✅ Firebase Init
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ Fetch Game IDs from Firebase
const idList = document.getElementById('id-list');

function loadGameIDs() {
  const idRef = ref(db, 'gameIDs'); // Database path: gameIDs
  onValue(idRef, (snapshot) => {
    idList.innerHTML = ''; // Clear old data
    if (snapshot.exists()) {
      const data = snapshot.val();
      Object.keys(data).forEach(key => {
        const item = data[key];
        const card = `
          <div class="card">
            <img src="${item.image}" alt="Game ID">
            <h3>${item.name}</h3>
            <p>Price: ${item.price} BDT</p>
            <a href="buy.html?id=${key}" class="btn">Buy Now</a>
          </div>
        `;
        idList.innerHTML += card;
      });
    } else {
      idList.innerHTML = '<p>No Game IDs Available</p>';
    }
  });
}

loadGameIDs();

// ✅ Future: Handle Buy (buy.html এ কাজ করবে)
