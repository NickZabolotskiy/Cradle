var domService = (function () {

function rewriteNews(){


 var i=0;
    for(var j=1; j<6;j+=2){

    
    var tempN = document.body.childNodes[3].childNodes[1].childNodes[j].childNodes[1];

    tempN.childNodes[3].childNodes[1].textContent = articlesService.articles[i].title;
    tempN.childNodes[5].childNodes[1].textContent = articlesService.articles[i].summary;
    tempN.childNodes[7].childNodes[1].childNodes[1].textContent = articlesService.articles[i].author;
    tempN.childNodes[7].childNodes[5].childNodes[1].textContent = articlesService.articles[i].createdAt.toDateString();
    i++;

    var tempN = document.body.childNodes[3].childNodes[1].childNodes[j].childNodes[3];

    tempN.childNodes[3].childNodes[1].textContent = articlesService.articles[i].title;
    tempN.childNodes[5].childNodes[1].textContent = articlesService.articles[i].summary;
    tempN.childNodes[7].childNodes[1].childNodes[1].textContent = articlesService.articles[i].author;
    tempN.childNodes[7].childNodes[5].childNodes[1].textContent = articlesService.articles[i].createdAt.toDateString();
    i++;
}
}


var isUser =false;

function hub(){
    if(isUser == true){
        location.href='https://vk.com';
        return true;
    }
return false;
}

function logIn(userName){
    if(userName == null){
        isUser = false;
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText = null;
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerText = null;
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].href = "https://vk.com/kristi_lavka";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].innerText = "вoйти";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].title="войти в аккаунт"

    document.body.childNodes[3].childNodes[5].childNodes[9].style.opacity=0;
    document.body.childNodes[3].childNodes[5].childNodes[9].style.cursor = "default";

    for(var j=1; j<6;j+=2){
        var tempN = document.body.childNodes[3].childNodes[1].childNodes[j].childNodes[1];

        

        tempN.childNodes[1].childNodes[3].style.opacity=0;
        tempN.childNodes[1].childNodes[3].style.cursor = "default";
        tempN.childNodes[1].childNodes[5].style.opacity=0;
        tempN.childNodes[1].childNodes[5].style.cursor = "default";


        var tempN = document.body.childNodes[3].childNodes[1].childNodes[j].childNodes[3];

        tempN.childNodes[1].childNodes[3].style.opacity=0;
        tempN.childNodes[1].childNodes[3].style.cursor = "default";
        tempN.childNodes[1].childNodes[5].style.opacity=0;
        tempN.childNodes[1].childNodes[5].style.cursor = "default";

    }

}else{
     isUser = true;
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText = "для";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerText = userName;
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].href = "https://vk.com/nik_zabolotskiy";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].innerText = "выйти";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].title="покинуть аккаунт"

    document.body.childNodes[3].childNodes[5].childNodes[9].style.opacity=1;
    document.body.childNodes[3].childNodes[5].childNodes[9].style.cursor = "pointer";

    for(var j=1; j<6;j+=2){
        var tempN = document.body.childNodes[3].childNodes[1].childNodes[j].childNodes[1];



        tempN.childNodes[1].childNodes[3].style.opacity=0.4;
        tempN.childNodes[1].childNodes[3].style.cursor = "pointer";
        tempN.childNodes[1].childNodes[5].style.opacity=0.4;
        tempN.childNodes[1].childNodes[5].style.cursor = "pointer";


        var tempN = document.body.childNodes[3].childNodes[1].childNodes[j].childNodes[3];

        tempN.childNodes[1].childNodes[3].style.opacity=0.4;
        tempN.childNodes[1].childNodes[3].style.cursor = "pointer";
        tempN.childNodes[1].childNodes[5].style.opacity=0.4;
        tempN.childNodes[1].childNodes[5].style.cursor = "pointer";

    }
}
rewriteNews();
}

logIn(null);
rewriteNews();


function editNode(id1, title1, summary1, content1){
     articlesService.editArticle(id1,
        {id:'34',title: title1,summary: summary1, createdAt: new Date('1991-08-15T23:12:44'),
        author:'ItsIam',content: content1});
     rewriteNews();
}
   
function removeNode(id1){
    articlesService.removeArticle(id1);
    rewriteNews();
}

function addNode(id1, title1, summary1, date1, author1, content1){
    articlesService.addArticle(
    {id:id1 ,title:title1 ,summary:summary1 ,createdAt: new Date(date1),
    author:author1,content:content1});
    rewriteNews();
}


  var names=[];
       for(var i=0; i<articlesService.articles.length; i++){
            if(!names.find(function (temp){
                return temp == articlesService.articles[i].author
            })) 
             names.push(articlesService.articles[i].author);
       }

       for(var i=0; i<names.length; i++){
        option = document.createElement('option'); 
        option.className = "menu"; 
        option.innerHTML = names[i]; 
        document.body.childNodes[3].childNodes[5].childNodes[3].childNodes[9].appendChild(option); 

       }

       return{
            rewriteNews: rewriteNews,
            editNode: editNode,
            addNode: addNode,
            removeNode: removeNode,
            logIn: logIn
       }

}());

function rewriteNewsGlobal(){ domService.rewriteNews();}
function addNodeGlobal(id1, title1, summary1, date1, author1, content1){
domService.addNode(id1, title1, summary1, date1, author1, content1) }
function removeNodeGlobal(id1){ domService.removeNode(id1) }
function editNodeGlobal(id1, title1, summary1, content1){ domService.editNode(id1, title1, summary1, content1) }
function logInGlobal(name){domService.logIn(name)}