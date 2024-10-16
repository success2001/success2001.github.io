// Search functionality
const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');
const projects = document.querySelectorAll('.project-card');

searchBtn.addEventListener('click', function() {
    let searchTerm = searchInput.value.toLowerCase();
    
    projects.forEach(project => {
        let title = project.textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});

// Slider functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-card');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

document.querySelector('.next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
});

document.querySelector('.prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
});

// Initialize first slide
showSlide(currentIndex);

// Category filtering
const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        let filter = button.textContent.toLowerCase();
        
        projects.forEach(project => {
            if (project.textContent.toLowerCase().includes(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Urgency filtering
const highUrgency = document.querySelector('#highUrgency');
const lowUrgency = document.querySelector('#lowUrgency');

function filterUrgency() {
    const high = highUrgency.checked;
    const low = lowUrgency.checked;
    
    projects.forEach(project => {
        const urgencyLevel = project.getAttribute('data-urgency');  // Assume project has a 'data-urgency' attribute
        if ((high && urgencyLevel === 'high') || (low && urgencyLevel === 'low')) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

highUrgency.addEventListener('change', filterUrgency);
lowUrgency.addEventListener('change', filterUrgency);



// // Form validation
// const subscriptionForm = document.querySelector('#subscriptionForm');

// subscriptionForm.addEventListener('submit', function(event) {
//     const email = subscriptionForm.querySelector('input[type="email"]').value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
//     if (!emailRegex.test(email)) {
//         alert('Please enter a valid email address');
//         event.preventDefault();  // Prevent form from submitting
//     }
// });
