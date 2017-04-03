
// window.onbeforeunload = function (){

// }

window.addEventListener('beforeunload', function () {

    var xhrt = new XMLHttpRequest();
    xhrt.open('POST', 'loadBase', false);
    xhrt.setRequestHeader('Content-Type', 'application/json');
    xhrt.send(JSON.stringify(articlesService.articles));
});