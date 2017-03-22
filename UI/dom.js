
var domService = (function () {

    var articles = articlesService.articles;
    var onWall = articlesService.getArticles(0,6);
    var cantShow = [false,false,false,false,false];
    var names=[];
    var paginCounter=-1;
    var UserName = "";
    var indexOfReplaceElement =-2;

    function rewriteNews(){

        var i=0;
        for(var j=1; j<6;j+=2){

            var tempN = document.body.childNodes[3].childNodes[1].childNodes[1].childNodes[j].childNodes[1];

            if(cantShow[j-1] == true) {
                tempN.style.opacity=0;
            }
            else{
                tempN.childNodes[3].childNodes[1].textContent = onWall[i].title;
                tempN.childNodes[5].childNodes[1].textContent = onWall[i].summary;
                tempN.childNodes[7].childNodes[1].childNodes[1].textContent = onWall[i].author;
                tempN.childNodes[7].childNodes[5].childNodes[1].textContent = onWall[i].createdAt.toDateString();
                tempN.style.opacity=1;
            }

            i++;

            var tempN = document.body.childNodes[3].childNodes[1].childNodes[1].childNodes[j].childNodes[3];

            if(cantShow[j] == true){
                tempN.style.opacity=0;
            }else{
                tempN.style.opacity=1;
                tempN.childNodes[3].childNodes[1].textContent = onWall[i].title;
                tempN.childNodes[5].childNodes[1].textContent = onWall[i].summary;
                tempN.childNodes[7].childNodes[1].childNodes[1].textContent = onWall[i].author;
                tempN.childNodes[7].childNodes[5].childNodes[1].textContent = onWall[i].createdAt.toDateString();
            }
            i++;
        }
    }
    function regName(){
        logIn(document.body.childNodes[9].childNodes[3].childNodes[3].childNodes[3].value);
        document.body.childNodes[3].style.display = "block";
        document.body.childNodes[9].style.display = "none";
    }
    function saveEdit(){
        onWall[indexOfReplaceElement].content = document.body.childNodes[5].childNodes[1].childNodes[7].childNodes[3].value;
        onWall[indexOfReplaceElement].title = document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[3].value;
        onWall[indexOfReplaceElement].summary = document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[7].value;

        editNode(onWall[indexOfReplaceElement].id, onWall[indexOfReplaceElement].title, onWall[indexOfReplaceElement].summary, onWall[indexOfReplaceElement].content);
        var articles = articlesService.articles;

        document.body.childNodes[5].style.display = "none";
        document.body.childNodes[3].style.display = "block";

        rewriteNews();
    }
    function goToReg(){
        if(document.body.childNodes[3].style.display == "block"){
            document.body.childNodes[3].style.display = "none";
            document.body.childNodes[9].style.display = "block";
        }
        if(document.body.childNodes[5].style.display == "block"){
            document.body.childNodes[5].style.display = "none";
            document.body.childNodes[9].style.display = "block";
        }
        if(document.body.childNodes[7].style.display == "block"){
            document.body.childNodes[7].style.display = "none";
            document.body.childNodes[9].style.display = "block";
        }

    }
    function fromnewstomain(){
        document.body.childNodes[11].style.display = "none";
        document.body.childNodes[3].style.display = "block";

    }
    function goToEdit(number){
        if(UserName != "" && cantShow[number]== false){
            indexOfReplaceElement =number;
            document.body.childNodes[3].style.display = "none";
            document.body.childNodes[5].style.display = "block";
            document.body.childNodes[5].childNodes[1].childNodes[7].childNodes[3].value = onWall[number].content;
            document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[3].value = onWall[number].title;
            document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[7].value = onWall[number].summary;
        }

    }
    function loadNew(){
        document.body.childNodes[7].style.display = "none";
        document.body.childNodes[3].style.display = "block";

        var id2 = articlesService.articles.length +1;

        articlesService.addArticle(
            {   id:id2.toString(),
                title: document.body.childNodes[7].childNodes[3].childNodes[3].value.toString(),
                summary: document.body.childNodes[7].childNodes[3].childNodes[7].value.toString(),
                createdAt: new Date(),
                author: UserName,
                content: document.body.childNodes[7].childNodes[7].childNodes[3].value.toString(),
            });

        articles = articlesService.articles;
        onWall = articles.slice(0,6);
        rewriteNews();

    }
    function goToAdd(){
        console.log(UserName);
        if(UserName != "") {
            document.body.childNodes[7].style.display = "block";
            document.body.childNodes[3].style.display = "none";
        }
    }
    function deleteNews(id2){
        if(UserName != "" && cantShow[id2]== false){
            articles =   articlesService.removeArticle(onWall[id2].id);
            articles = articlesService.articles;
            onWall = articles.slice(0,6);

            for(var i=0; i<6; i++) {
                if (onWall.length <= i) cantShow[i] = true;
                else  cantShow[i] = false;
            }
            rewriteNews();
        }
    }
    function getFullNews(id){
        document.body.childNodes[11].style.display = "block";
        document.body.childNodes[3].style.display = "none";

        console.log(document.body.childNodes[11].childNodes[1].childNodes[1].childNodes );

        document.body.childNodes[11].childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent = onWall[id].title;
        document.body.childNodes[11].childNodes[1].childNodes[1].childNodes[3].childNodes[1].textContent = onWall[id].content;
        document.body.childNodes[11].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1].textContent = onWall[id].author
        document.body.childNodes[11].childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[1].textContent = onWall[id].createdAt.toDateString();

    }
    function  filterNews(){

        var n, txt="", value1 = null, value2 = null;

        if(document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[3].childNodes[0].checked){
            n = document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[9].options.selectedIndex;
            txt = document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[9].options[n].text;
        }
        if(document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[17].childNodes[0].checked) {
            if(document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[23].value)
                value1 = new Date(document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[23].value);
            if(document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[25].value)
                value2 = new Date(document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[25].value);
        }

        if(value1 == null && value2 == null && (txt=="" || txt=="--Автор--")){
            onWall = articlesService.getArticles(0,6);
            articles = articlesService.getArticles(0,40);
        }
        else{
            if((value1 != null || value2 != null)&& txt!="" && txt!="--Автор--"){
                onWall = articlesService.getArticlesTimeFilter(0,6,{createdAt:value1},{createdAt:value2},{author:txt});
                articles = articlesService.getArticlesTimeFilter(0,40,{createdAt:value1},{createdAt:value2},{author:txt});
                console.log(articles);
                console.log(onWall);
            }
            else{
                if(txt!=""&& txt!="--Автор--"){
                    onWall = articlesService.getArticles(0,6,{author:txt});
                    articles = articlesService.getArticles(0,40,{author:txt});
                }
                else{
                    onWall = articlesService.getArticlesTimeFilter(0,6,{createdAt:value1},{createdAt:value2});
                    articles = articlesService.getArticlesTimeFilter(0,40,{createdAt:value1},{createdAt:value2});
                }
            }
        }

        for(var i=0; i<6; i++){
            if(onWall.length <= i) cantShow[i] = true;
            else  cantShow[i] = false;
        }
        paginCounter=-1;
        lastPage();
        nextPage();
        rewriteNews();
    }
    function logIn(userName1){
        if(userName1 == null || userName1 ==""){
            UserName = "";
            document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText = null;
            document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerText = null;
            document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].innerText = "вoйти";
            document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].title="войти в аккаунт"

            document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[9].style.opacity=0;
            document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[9].style.cursor = "default";

            for(var j=1; j<6;j+=2){
                var tempN = document.body.childNodes[3].childNodes[1].childNodes[1].childNodes[j].childNodes[1];

                tempN.childNodes[1].childNodes[3].style.opacity=0;
                tempN.childNodes[1].childNodes[3].style.cursor = "default";
                tempN.childNodes[1].childNodes[5].style.opacity=0;
                tempN.childNodes[1].childNodes[5].style.cursor = "default";


                var tempN = document.body.childNodes[3].childNodes[1].childNodes[1].childNodes[j].childNodes[3];

                tempN.childNodes[1].childNodes[3].style.opacity=0;
                tempN.childNodes[1].childNodes[3].style.cursor = "default";
                tempN.childNodes[1].childNodes[5].style.opacity=0;
                tempN.childNodes[1].childNodes[5].style.cursor = "default";

            }

        }else{
            UserName =  userName1;
            document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText = "для";
            document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerText = userName1;
            document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].innerText = "выйти";
            document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[7].childNodes[1].title="покинуть аккаунт"

            document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[9].style.opacity=1;
            document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[9].style.cursor = "pointer";

            for(var j=1; j<6;j+=2){
                var tempN = document.body.childNodes[3].childNodes[1].childNodes[1].childNodes[j].childNodes[1];



                tempN.childNodes[1].childNodes[3].style.opacity=0.4;
                tempN.childNodes[1].childNodes[3].style.cursor = "pointer";
                tempN.childNodes[1].childNodes[5].style.opacity=0.4;
                tempN.childNodes[1].childNodes[5].style.cursor = "pointer";


                var tempN = document.body.childNodes[3].childNodes[1].childNodes[1].childNodes[j].childNodes[3];

                tempN.childNodes[1].childNodes[3].style.opacity=0.4;
                tempN.childNodes[1].childNodes[3].style.cursor = "pointer";
                tempN.childNodes[1].childNodes[5].style.opacity=0.4;
                tempN.childNodes[1].childNodes[5].style.cursor = "pointer";

            }
        }
        rewriteNews();
    }
    function editNode(id1, title1, summary1, content1){
        articlesService.editArticle(id1,
            {id:'34',title: title1,summary: summary1, createdAt: new Date('1991-08-15T23:12:44'),
                author:'ItsIam',content: content1});
        rewriteNews();
    }
    function nextPage(){
        if(articles.slice((paginCounter+1)*6,(paginCounter+1)*6+6).length !=0){
            paginCounter++;
            onWall = articles.slice(paginCounter*6,paginCounter*6+6);


            for(var i=0; i<6; i++){
                if(onWall.length <= i) cantShow[i] = true;
                else  cantShow[i] = false;
                if(paginCounter <=0) document.body.childNodes[3].childNodes[3].childNodes[5].style.opacity=0;
                else document.body.childNodes[3].childNodes[3].childNodes[5].style.opacity=0.8;
            }
            rewriteNews();
        }
        if(articles.slice((paginCounter+1)*6,(paginCounter+1)*6+6).length ==0) document.body.childNodes[3].childNodes[3].childNodes[7].style.opacity=0;
        else document.body.childNodes[3].childNodes[3].childNodes[7].style.opacity=0.8;
    }
    function lastPage(){
        if(paginCounter > 0){
            paginCounter--;
            onWall = articles.slice(paginCounter*6,paginCounter*6+6);

            for(var i=0; i<6; i++){
                if(onWall.length <= i) cantShow[i] = true;
                else  cantShow[i] = false;
            }
            rewriteNews();
        }
        if(paginCounter <=0) document.body.childNodes[3].childNodes[3].childNodes[5].style.opacity=0;
        else document.body.childNodes[3].childNodes[3].childNodes[5].style.opacity=0.8;
        if(articles.slice((paginCounter+1)*6,(paginCounter+1)*6+6).length ==0) document.body.childNodes[3].childNodes[3].childNodes[7].style.opacity=0;
        else document.body.childNodes[3].childNodes[3].childNodes[7].style.opacity=0.8;
    }

    document.body.childNodes[3].style.display = "block";
    document.body.childNodes[5].style.display = "none";
    document.body.childNodes[7].style.display = "none";
    document.body.childNodes[9].style.display = "none";
    document.body.childNodes[11].style.display = "none";


    nextPage();
    logIn();
    lastPage();
    rewriteNews();

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
        document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[9].appendChild(option);

    }

    return{
        rewriteNews: rewriteNews,
        editNode: editNode,
        logIn: logIn,
        filterNews: filterNews,
        deleteNews: deleteNews,
        nextPage:nextPage,
        lastPage:lastPage,
        getFullNews: getFullNews,
        regName: regName,
        goToReg: goToReg,
        saveEdit:saveEdit,
        loadNew: loadNew,
        goToAdd: goToAdd,
        goToEdit:goToEdit,
        fromnewstomain:fromnewstomain,
    }

}());

