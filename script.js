// ==================== 
// Material Design 3 Ripple Effect
// ====================

function createRipple(event) {
    const button = event.currentTarget;
    
    // Don't create ripple if element already has ::before state layer
    if (button.classList.contains('no-ripple')) return;
    
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    // Remove existing ripples
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const rippleElements = document.querySelectorAll('.social-btn, .project-card, .tool-item, .carousel-nav, .indicator');
    rippleElements.forEach(element => {
        element.addEventListener('mousedown', createRipple);
    });
});

// ==================== 
// Mobile Navigation Toggle
// ====================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger with MD3 emphasized easing
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
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
// Smooth Scrolling for Navigation Links - Material Design 3
// ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Use MD3 emphasized decelerate for natural feeling scroll
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Add focus to target for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus();
            setTimeout(() => target.removeAttribute('tabindex'), 1000);
        }
    });
});

// ==================== 
// Navbar Elevation on Scroll - Material Design 3
// ====================

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add elevation when scrolled
    if (currentScrollY > 20) {
        navbar.style.boxShadow = 'var(--md3-elevation-2)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = '1px solid var(--outline-variant)';
    }
    
    lastScrollY = currentScrollY;
}, { passive: true });

// ==================== 
// Material Design 3 Scroll Reveal Animation with Choreography
// ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe elements for animation with staggered delays
document.addEventListener('DOMContentLoaded', () => {
    // Project cards - stagger by 100ms
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = `opacity 500ms cubic-bezier(0.05, 0.7, 0.1, 1) ${index * 100}ms, transform 500ms cubic-bezier(0.05, 0.7, 0.1, 1) ${index * 100}ms`;
        observer.observe(element);
    });
    
    // Tool items - stagger by 50ms
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        element.style.transition = `opacity 400ms cubic-bezier(0.05, 0.7, 0.1, 1) ${index * 50}ms, transform 400ms cubic-bezier(0.05, 0.7, 0.1, 1) ${index * 50}ms`;
        observer.observe(element);
    });
    
    // Experience items - stagger by 80ms
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-30px)';
        element.style.transition = `opacity 450ms cubic-bezier(0.05, 0.7, 0.1, 1) ${index * 80}ms, transform 450ms cubic-bezier(0.05, 0.7, 0.1, 1) ${index * 80}ms`;
        observer.observe(element);
    });
    
    // Info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = 'opacity 500ms cubic-bezier(0.05, 0.7, 0.1, 1), transform 500ms cubic-bezier(0.05, 0.7, 0.1, 1)';
        observer.observe(element);
    });
});

// ==================== 
// Carousel Functionality
// ====================

const cardsContainer = document.querySelector('.cards-container');
const infoCards = document.querySelectorAll('.info-card');
const indicators = document.querySelectorAll('.indicator');
const navPrev = document.querySelector('.carousel-nav-prev');
const navNext = document.querySelector('.carousel-nav-next');
let currentSlide = 0;

// Auto-advance carousel every 7 seconds (calmer timing)
function autoAdvance() {
    currentSlide = (currentSlide + 1) % infoCards.length;
    updateCarousel();
}

let carouselInterval = setInterval(autoAdvance, 7000);

// Update carousel position with smooth transition
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

// Navigation arrow handlers
navPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + infoCards.length) % infoCards.length;
    updateCarousel();
    clearInterval(carouselInterval);
    carouselInterval = setInterval(autoAdvance, 7000);
});

navNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % infoCards.length;
    updateCarousel();
    clearInterval(carouselInterval);
    carouselInterval = setInterval(autoAdvance, 7000);
});

// Indicator click handlers
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
        // Reset auto-advance timer
        clearInterval(carouselInterval);
        carouselInterval = setInterval(autoAdvance, 7000);
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
        carouselInterval = setInterval(autoAdvance, 7000);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
        currentSlide--;
        updateCarousel();
        clearInterval(carouselInterval);
        carouselInterval = setInterval(autoAdvance, 7000);
    } else if (e.key === 'ArrowRight' && currentSlide < infoCards.length - 1) {
        currentSlide++;
        updateCarousel();
        clearInterval(carouselInterval);
        carouselInterval = setInterval(autoAdvance, 7000);
    }
});

console.log('Portfolio website initialized successfully!');
