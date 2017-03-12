var i=0;

var isUser =true;
var userName = "NickZabolotskiy"

function hub(){
    if(isUser == true){
        location.href='https://vk.com';
        return true;
    }
return false;
}

if(isUser == false){
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText = null;
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerText = null;
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].href = "https://vk.com/kristi_lavka";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].innerText = "вoйти";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].title="войти в аккаунт"

    document.body.childNodes[3].childNodes[5].childNodes[9].style.opacity=0;
    document.body.childNodes[3].childNodes[5].childNodes[9].style.cursor = "default";

    for(var j=1; j<6;j+=2){
        var tempN = document.body.childNodes[3].childNodes[1].childNodes[j].childNodes[1];

        console.log(tempN.childNodes[1].childNodes[3]);

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
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText = "для";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerText = userName;
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].href = "https://vk.com/nik_zabolotskiy";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].innerText = "выйти";
    document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].title="покинуть аккаунт"

    document.body.childNodes[3].childNodes[5].childNodes[9].style.opacity=1;
    document.body.childNodes[3].childNodes[5].childNodes[9].style.cursor = "pointer";

    for(var j=1; j<6;j+=2){
        var tempN = document.body.childNodes[3].childNodes[1].childNodes[j].childNodes[1];

        console.log(tempN.childNodes[1].childNodes[3]);

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



for(var j=1; j<6;j+=2){


    articlesService.editArticle(2,
        {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'});

    articlesService.removeArticle(3);

    console.log( articlesService.articles)

    articlesService.addArticle(
    {id:'24',title:'NewTemp',summary:'NewSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'NewContent'});




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