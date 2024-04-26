document.querySelectorAll('.gallery-title').forEach(function(title) {
    title.addEventListener('click', function() {
        document.querySelectorAll('.gallery-item').forEach(function(item) {
            item.classList.remove('visible');
        });
        var newsId = this.id.replace('gallery-', 'gallery-item-');
        var newsItem = document.getElementById(newsId);
        newsItem.classList.add('visible');
        document.querySelectorAll('.gallery-title').forEach(function(title) {
            title.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});