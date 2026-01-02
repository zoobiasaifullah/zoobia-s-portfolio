// ==================== 
// Mobile Navigation Toggle
// ====================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ==================== 
// Smooth Scrolling for Navigation Links
// ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 
// Navbar Background on Scroll
// ====================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid var(--border-color)';
    }
});

// ==================== 
// Scroll Reveal Animation
// ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .tool-item, .experience-item');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ==================== 
// Carousel Functionality
// ====================

const cardsContainer = document.querySelector('.cards-container');
const infoCards = document.querySelectorAll('.info-card');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

// Auto-advance carousel every 6 seconds
function autoAdvance() {
    currentSlide = (currentSlide + 1) % infoCards.length;
    updateCarousel();
}

let carouselInterval = setInterval(autoAdvance, 6000);

// Update carousel position
function updateCarousel() {
    const scrollPosition = infoCards[currentSlide].offsetLeft;
    cardsContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Indicator click handlers
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
        // Reset auto-advance timer
        clearInterval(carouselInterval);
        carouselInterval = setInterval(autoAdvance, 6000);
    });
});

// Handle manual scroll
cardsContainer.addEventListener('scroll', () => {
    const scrollPosition = cardsContainer.scrollLeft;
    const cardWidth = infoCards[0].offsetWidth;
    const newSlide = Math.round(scrollPosition / cardWidth);
    
    if (newSlide !== currentSlide && newSlide < infoCards.length) {
        currentSlide = newSlide;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
        // Reset auto-advance timer
        clearInterval(carouselInterval);
        carouselInterval = setInterval(autoAdvance, 6000);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
        currentSlide--;
        updateCarousel();
        clearInterval(carouselInterval);
        carouselInterval = setInterval(autoAdvance, 6000);
    } else if (e.key === 'ArrowRight' && currentSlide < infoCards.length - 1) {
        currentSlide++;
        updateCarousel();
        clearInterval(carouselInterval);
        carouselInterval = setInterval(autoAdvance, 6000);
    }
});

console.log('Portfolio website initialized successfully!');
