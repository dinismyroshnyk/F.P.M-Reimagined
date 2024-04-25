document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header-background');
    var backgroundImage = document.getElementById('background-image');
    var headerHeight = header.offsetHeight;
    var backgroundImageHeight = backgroundImage.offsetHeight;
    var stopPosition = backgroundImageHeight - headerHeight;
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        if (scrollPosition > stopPosition) {
            header.classList.add('header-background--stop');
            var topValue = backgroundImageHeight - headerHeight;
            header.style.top = topValue + 'px';
        } else {
            header.classList.remove('header-background--stop');
            header.style.top = 0;
        }
    });
});