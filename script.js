const auth = firebase.auth();
const database = firebase.database();

const authForm = document.getElementById('auth-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const authMessage = document.getElementById('auth-message');
const contentSection = document.getElementById('content-section');
const authSection = document.getElementById('auth-section');
const userEmailSpan = document.getElementById('user-email');

const logoutBtn = document.getElementById('logout-btn');
const dashboardLink = document.getElementById('dashboard-link');
const adminLink = document.getElementById('admin-link');

const navLinks = {
  home: document.getElementById('home-link'),
  buy: document.getElementById('buy-link'),
  sell: document.getElementById('sell-link'),
  addmoney: document.getElementById('addmoney-link'),
};

let currentUser = null;

// Show/hide navbar links based on role
function updateNav(user) {
  if(user){
    authSection.style.display = 'none';
    contentSection.style.display = 'block';
    userEmailSpan.textContent = user.email;
    logoutBtn.style.display = 'inline-block';
    dashboardLink.style.display = 'inline-block';

    // Check if user is admin from database (example path: /admins/user.uid)
    database.ref('admins/' + user.uid).once('value').then(snapshot => {
      if(snapshot.exists()){
        adminLink.style.display = 'inline-block';
      } else {
        adminLink.style.display = 'none';
      }
    });

  } else {
    authSection.style.display = 'block';
    contentSection.style.display = 'none';
    logoutBtn.style.display = 'none';
    dashboardLink.style.display = 'none';
    adminLink.style.display = 'none';
  }
}

// Login
loginBtn.addEventListener('click', e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      authMessage.textContent = 'Login successful!';
      currentUser = userCredential.user;
      updateNav(currentUser);
    })
    .catch(error => {
      authMessage.textContent = error.message;
    });
});

// Signup
signupBtn.addEventListener('click', e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      authMessage.textContent = 'Signup successful! Please login.';
      currentUser = userCredential.user;

      // By default new user is not admin; you can add admins manually in Firebase DB
      updateNav(currentUser);
    })
    .catch(error => {
      authMessage.textContent = error.message;
    });
});

// Logout
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() => {
    authMessage.textContent = 'Logged out.';
    currentUser = null;
    updateNav(null);
  });
});

// Auth state observer
auth.onAuthStateChanged(user => {
  currentUser = user;
  updateNav(user);
});
