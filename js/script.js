// Toggle Navbar on Mobile
const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Search Functionality (Optional Placeholder)
document.getElementById('search-btn').addEventListener('click', () => {
  const query = document.getElementById('search-input').value;
  alert(`Searching for: ${query}`);
});