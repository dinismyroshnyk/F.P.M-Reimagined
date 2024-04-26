document.querySelectorAll('.contact-title').forEach(function(title) {
    title.addEventListener('click', function() {
        document.querySelectorAll('.contact-item').forEach(function(item) {
            item.classList.remove('visible');
        });
        var newsId = this.id.replace('contact-', 'contact-item-');
        var newsItem = document.getElementById(newsId);
        newsItem.classList.add('visible');
        document.querySelectorAll('.contact-title').forEach(function(title) {
            title.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});