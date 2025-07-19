// Navbar for phone
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

// Save and restore scroll position ai
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
});


// // Existing Navbar for phone function
// function toggleMenu() {
//     const navMenu = document.querySelector('.nav-menu');
//     navMenu.classList.toggle('show');
// }

// // Existing Save and restore scroll position
// window.addEventListener('beforeunload', () => {
//     sessionStorage.setItem('scrollPosition', window.scrollY);
// });

// window.addEventListener('load', () => {
//     const scrollPosition = sessionStorage.getItem('scrollPosition');
//     if (scrollPosition) {
//         window.scrollTo(0, parseInt(scrollPosition, 10));
//     }
// });

// NEW: jQuery for Homepage Slider
$(document).ready(function() {
    const slides = $('.homepage-slider .slide-item');
    const prevButton = $('.homepage-slider .slide-prev');
    const nextButton = $('.homepage-slider .slide-next');
    let currentSlideIndex = 0;
    const slideIntervalTime = 5000; // Change slide every 5 seconds
    let slideTimer; // To store the interval ID

    function showSlide(index) {
        slides.removeClass('active'); // Hide all slides
        slides.eq(index).addClass('active'); // Show the current slide
    }

    function startAutoSlide() {
        // Clear any existing timer to prevent multiple intervals running
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, slideIntervalTime);
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Event listeners for buttons
    nextButton.on('click', function() {
        nextSlide();
        startAutoSlide(); // Restart auto-slide after manual navigation
    });

    prevButton.on('click', function() {
        prevSlide();
        startAutoSlide(); // Restart auto-slide after manual navigation
    });

    // Initial display of the first slide and start auto-sliding
    if (slides.length > 0) {
        showSlide(currentSlideIndex);
        startAutoSlide();
    }
});