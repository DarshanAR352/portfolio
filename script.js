const fadeElements = document.querySelectorAll('.fade-in');

function checkFadeElements() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkFadeElements);
window.addEventListener('load', checkFadeElements);

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
