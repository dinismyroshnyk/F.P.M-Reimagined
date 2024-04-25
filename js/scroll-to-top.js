document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scroll-to-top');
    var header = document.querySelector('.header-background');
    var backgroundImage = document.getElementById('background-image');
    var headerHeight = header.offsetHeight;
    var backgroundImageHeight = backgroundImage.offsetHeight;
    var displayPosition = backgroundImageHeight - headerHeight;
    window.addEventListener('scroll', function() {
        if (window.scrollY > displayPosition) {
            scrollToTopButton.style.pointerEvents = 'auto';
            scrollToTopButton.style.opacity = '1';
        } else {
            scrollToTopButton.style.pointerEvents = 'none';
            scrollToTopButton.style.opacity = '0';
        }
    });
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});