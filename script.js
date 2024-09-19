// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when user scrolls down 100px
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
