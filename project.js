// Get elements
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');

// Toggle sidebar when menu button is clicked
menuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active'); // Toggle the 'active' class to expand/collapse the sidebar
});
