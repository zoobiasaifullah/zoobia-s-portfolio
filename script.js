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

const carouselContainer = document.querySelector('.carousel-container');
const carouselCards = document.querySelectorAll('.carousel-card');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Auto-advance carousel every 5 seconds
function autoAdvance() {
    currentIndex = (currentIndex + 1) % carouselCards.length;
    updateCarousel();
}

let autoAdvanceInterval = setInterval(autoAdvance, 5000);

// Update carousel position and active states
function updateCarousel() {
    const scrollPosition = carouselCards[currentIndex].offsetLeft - carouselContainer.offsetLeft;
    carouselContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Dot click handlers
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        // Reset auto-advance timer
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = setInterval(autoAdvance, 5000);
    });
});

// Update current index on manual scroll
carouselContainer.addEventListener('scroll', () => {
    const scrollPosition = carouselContainer.scrollLeft;
    let newIndex = 0;
    
    carouselCards.forEach((card, index) => {
        const cardPosition = card.offsetLeft - carouselContainer.offsetLeft;
        if (Math.abs(scrollPosition - cardPosition) < 50) {
            newIndex = index;
        }
    });
    
    if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        // Reset auto-advance timer
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = setInterval(autoAdvance, 5000);
    }
});

console.log('Portfolio website initialized successfully!');
