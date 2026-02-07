function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Navbar Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.height = '80px';
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.height = '100px';
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeBtn = document.querySelector('.close-lightbox');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(item.src);
    });
});

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Close on outside click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
});

// Hero Slider Logic
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

initHeroSlider();
