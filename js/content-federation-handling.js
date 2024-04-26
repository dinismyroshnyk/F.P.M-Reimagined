document.querySelectorAll('.federation-title').forEach(function(title) {
    title.addEventListener('click', function() {
        document.querySelectorAll('.federation-item').forEach(function(item) {
            item.classList.remove('visible');
        });
        var newsId = this.id.replace('federation-', 'federation-item-');
        var newsItem = document.getElementById(newsId);
        newsItem.classList.add('visible');
        document.querySelectorAll('.federation-title').forEach(function(title) {
            title.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});