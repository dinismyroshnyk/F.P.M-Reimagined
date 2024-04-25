document.querySelectorAll('.news-title').forEach(function(title) {
    title.addEventListener('click', function() {
        document.querySelectorAll('.news-item').forEach(function(item) {
            item.classList.remove('visible');
        });
        var newsId = this.id.replace('news-', 'news-item-');
        var newsItem = document.getElementById(newsId);
        newsItem.classList.add('visible');
        document.querySelectorAll('.news-title').forEach(function(title) {
            title.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});