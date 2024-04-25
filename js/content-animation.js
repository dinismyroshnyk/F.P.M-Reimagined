window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.content > *');
    elements.forEach(function(element) {
        var rect = element.getBoundingClientRect();
        var isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInView) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});