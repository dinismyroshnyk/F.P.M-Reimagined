document.querySelectorAll('.associates-title').forEach(function(title) {
    title.addEventListener('click', function() {
        document.querySelectorAll('.associates-item').forEach(function(item) {
            item.classList.remove('visible');
        });
        var newsId = this.id.replace('associates-', 'associates-item-');
        var newsItem = document.getElementById(newsId);
        newsItem.classList.add('visible');
        document.querySelectorAll('.associates-title').forEach(function(title) {
            title.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});