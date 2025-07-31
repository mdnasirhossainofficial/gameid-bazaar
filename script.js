import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase-config.js';

// Signup Function
document.getElementById("signup-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("✅ Signup Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("❌ Signup Failed: " + error.message);
        });
});

// Login Function
document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("✅ Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("❌ Login Failed: " + error.message);
        });
});
