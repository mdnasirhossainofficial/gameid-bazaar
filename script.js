// থিম সেভ ও লোড
const themeToggleBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
  if(theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else if(theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme');
  if(currentTheme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

// ইউজারের পছন্দ থিম লোড করা
(function() {
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme) {
    setTheme(savedTheme);
  }
})();

if(themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// ডেমো ডেটা (Game ID list)
const gameIds = [
  {
    uid: 'G12345',
    price: 1500,
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    uid: 'X99887',
    price: 3000,
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    uid: 'A55661',
    price: 2000,
    image: 'https://i.pravatar.cc/150?img=3'
  },
  {
    uid: 'Z77881',
    price: 500,
    image: 'https://i.pravatar.cc/150?img=7'
  },
];

// হোম পেজে কার্ড রেন্ডার করা
const idCardsContainer = document.getElementById('id-cards');
if(idCardsContainer) {
  gameIds.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="Profile Image" />
      <h3>UID: ${item.uid}</h3>
      <p>মূল্য: ৳${item.price}</p>
      <button onclick="alert('এই আইডিটি কিনতে এখনও পেমেন্ট সিস্টেম যুক্ত করা হয়নি')">Buy</button>
    `;
    idCardsContainer.appendChild(card);
  });
}

// সেল ফর্ম হ্যান্ডলার
const sellForm = document.getElementById('sell-form');
if(sellForm) {
  sellForm.addEventListener('submit', e => {
    e.preventDefault();
    const profileImage = document.getElementById('profileImage').value;
    const uid = document.getElementById('uid').value;
    const price = document.getElementById('price').value;

    if(profileImage && uid && price) {
      // এখানে ফর্ম ডেটা ব্যাকএন্ডে পাঠানো হতো
      document.getElementById('message').innerText = "তোমার আইডি সফলভাবে পোস্ট হয়েছে!";
      sellForm.reset();
    } else {
      document.getElementById('message').innerText = "সব ফিল্ড পূরণ করুন।";
    }
  });
}

// প্রোফাইল পেজ ট্রানজাকশন ডেমো
const transactionTableBody = document.querySelector('#transaction-table tbody');
if(transactionTableBody) {
  const transactions = [
    {time: '2025-07-24 14:00', desc: 'Game ID কেনা: G12345', amount: -1500},
    {time: '2025-07-25 09:00', desc: 'টাকা যোগ করা', amount: 5000},
    {time: '2025-07-26 16:30', desc: 'Game ID বিক্রি: Z77881', amount: 500},
  ];

  transactions.forEach(tx => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${tx.time}</td>
      <td>${tx.desc}</td>
      <td style="color:${tx.amount < 0 ? 'red' : 'green'}">${tx.amount}</td>
    `;
    transactionTableBody.appendChild(tr);
  });
}