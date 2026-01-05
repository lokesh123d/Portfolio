// ==========================================
// Mobile Menu Functionality
// ==========================================
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const svg = hamburgerBtn.querySelector('svg path');
    if (mobileMenu.classList.contains('hidden')) {
        svg.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    } else {
        svg.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const svg = hamburgerBtn.querySelector('svg path');
        svg.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    });
});

// ==========================================
// Smooth Scrolling for Anchor Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// Active Navigation Link Highlighting
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav a, .mobile-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// GSAP Simple Scroll Animations
// ==========================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// IMPORTANT: Set all hero elements to visible first to prevent opacity 0 bug
gsap.set(['.hero-title', '.hero-subtitle', '.hero-description', '.hero-buttons .btn', '.social-icon', '.hero-image-container'], {
    opacity: 1,
    clearProps: 'transform'
});

// Hero Section - Simple Fade In
gsap.from('.hero-title', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});

gsap.from('.hero-description', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
});

gsap.from('.hero-buttons .btn', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.4,
    ease: 'power2.out'
});

gsap.from('.social-icon', {
    opacity: 0,
    y: 15,
    duration: 0.5,
    stagger: 0.05,
    delay: 0.5,
    ease: 'power2.out'
});

gsap.from('.hero-image-container', {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    delay: 0.3,
    ease: 'power2.out'
});

// About Section
gsap.from('.about-title', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.about-description p', {
    scrollTrigger: {
        trigger: '.about-description',
        start: 'top 80%'
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
});

gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.about-timeline',
        start: 'top 80%'
    },
    opacity: 0,
    x: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out'
});

// Skills Section
gsap.from('.skills .section-title', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.skill-category', {
    scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 75%'
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power2.out'
});

// Projects Section
gsap.from('.projects .section-title', {
    scrollTrigger: {
        trigger: '.projects',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 75%'
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power2.out'
});

// Contact Section
gsap.from('.contact-title', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.contact-info-simple', {
    scrollTrigger: {
        trigger: '.contact-simple-grid',
        start: 'top 75%'
    },
    opacity: 0,
    x: -30,
    duration: 0.7,
    ease: 'power2.out'
});

gsap.from('.contact-form-simple', {
    scrollTrigger: {
        trigger: '.contact-simple-grid',
        start: 'top 75%'
    },
    opacity: 0,
    x: 30,
    duration: 0.7,
    ease: 'power2.out'
});

gsap.from('.contact-link', {
    scrollTrigger: {
        trigger: '.contact-links',
        start: 'top 80%'
    },
    opacity: 0,
    y: 15,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
});

gsap.from('.form-field', {
    scrollTrigger: {
        trigger: '.contact-form-simple',
        start: 'top 75%'
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.08,
    ease: 'power2.out'
});

// Footer
gsap.from('.footer', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%'
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out'
});

console.log('✨ Simple GSAP Animations Loaded');
