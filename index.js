// Fade-in animation for the hero section
window.addEventListener('load', () => {
    document.querySelector('.fade-in').classList.add('fade-in-active');
});

// Scroll animations for features and about section
const observerOptions = {
    threshold: 0.1
};

const fadeInElements = document.querySelectorAll('.slide-left, .slide-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.classList.contains('slide-left') ? 'slide-left-active' : 'slide-up-active');
        }
    });
}, observerOptions);

fadeInElements.forEach(el => observer.observe(el));

// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();