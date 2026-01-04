// script.js

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Gallery filters
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxTitle = document.querySelector('.lightbox-title');
const lightboxYearMedium = document.querySelector('.lightbox-year-medium');
const lightboxDesc = document.querySelector('.lightbox-desc');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.getAttribute('data-large');
        lightboxImg.alt = img.alt;
        lightboxTitle.textContent = img.getAttribute('data-title');
        lightboxYearMedium.textContent = img.getAttribute('data-year') + ' — ' + img.getAttribute('data-medium');
        lightboxDesc.textContent = img.getAttribute('data-desc');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
});

// Fade-in on scroll
const fadeElems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElems.forEach(el => observer.observe(el));

// Contact form (demo only)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        alert('Thank you! Your message has been sent (demo mode).');
        form.reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});