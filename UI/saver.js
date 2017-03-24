
window.addEventListener('beforeunload', function () {
    localStorage.setItem('content', JSON.stringify(articlesService.articles));
});