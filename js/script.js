// Sticky Navigation
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Form Handling
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = bookingForm.querySelector('button');
    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;

    // Simulate sending data
    setTimeout(() => {
        alert('Thank you! Emerald Events Planners has received your inquiry. We will contact you shortly.');
        bookingForm.reset();
        submitBtn.innerText = 'Send Inquiry';
        submitBtn.disabled = false;
    }, 1500);
});

// Mobile Menu Toggle (Simplified)
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    alert("Mobile menu links: Home, About, Services, Packages, Work, Contact");
});

// Smooth Scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});