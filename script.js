// Slider functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

// Search & Filter functionality
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const idGrid = document.getElementById('idGrid');

function filterIDs() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const cards = idGrid.querySelectorAll('.id-card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const cardCategory = card.getAttribute('data-category');
    const matchesSearch = title.includes(searchTerm);
    const matchesCategory = category === '' || category === cardCategory;

    if (matchesSearch && matchesCategory) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterIDs);
categoryFilter.addEventListener('change', filterIDs);
