let trail = []; // Array to hold trail positions

// JavaScript functionality for Cloud Rider website
function updateTrail(x, y) {
    trail.push({ x, y });
    drawTrail();
}

function drawTrail() {
    const trailContainer = document.querySelector('.trail-container');
    trailContainer.innerHTML = ''; // Clear previous trails
    trail.forEach((point) => {
        const trailPoint = document.createElement('div');
        trailPoint.className = 'trail-point';
        trailPoint.style.left = `${point.x}px`;
        trailPoint.style.top = `${point.y}px`;
        trailContainer.appendChild(trailPoint);
    });
}

// Update scooter position and trail on movement
const scooterIcon = document.querySelector('.scooter-icon');
let scooterPosition = { x: 10, y: 50 }; // Initial position

function updateScooter() {
    scooterPosition.x += 1; // Move right
    updateTrail(scooterPosition.x, scooterPosition.y);
    scooterIcon.style.left = `${scooterPosition.x}%`;
    requestAnimationFrame(updateScooter);
}
requestAnimationFrame(updateScooter);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]'); // Smooth scroll for anchor links
for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) { // Check if the target element exists
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
