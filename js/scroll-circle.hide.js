document.addEventListener('DOMContentLoaded', function() {
    var scrollCircle = document.getElementById('scroll-circle');
    var scrollIcon = document.getElementById('scroll-icon');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            scrollIcon.textContent = 'check';
            scrollCircle.classList.add('hidden');
        } else {
            scrollIcon.textContent = 'keyboard_double_arrow_down';
            scrollCircle.classList.remove('hidden');
        }
    });
});