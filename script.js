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
