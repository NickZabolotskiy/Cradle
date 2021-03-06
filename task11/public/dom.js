var domService = (function () {

    var articles;
    var onWall;
    var cantShow = [false,false,false,false,false];
    var names=[];
    var paginCounter=-1;
    var UserName ="";
    var tempID=-1;
    var logins = ["mr.Glad","mr.Stunning","mr.Proud","mr.Sad","mr.Mournful","mr.Calm","mrs.Glad","mrs.Stunning","mrs.Proud","mrs.Sad","mrs.Mournful","mrs.Calm"];
    var passwords = ["2244mgl","2244mst","2244mpr","2244msd","2244mmr","2244mcl","2244wgl","2244wst","2244wpr","2244wsd","2244wmr","2244wcl"];

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
    function findAuthors(){
        names=[];

        var promise = new Promise(function(resolve, reject) {
            articles = articlesService.getArticles(0,articlesService.articles().length+1);
            var articles2 =[];
            for(var i=0; i< articles.length; i++){
                if(articles[i].isDeleted != 'true'){
                    articles2.push(articles[i]);
                }
            }
            articles = articles2;
            resolve(articles);
        });

        promise.then(function(response) {
            articles = response;
            for(var i=0; i<articles.length; i++){
                if(!names.find(function (temp){
                        return temp == articles[i].author
                    }))
                    names.push(articles[i].author);
            }
            while(document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[9].firstElementChild != undefined)
                document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[9].removeChild(document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[9].lastChild);
            for(var i=0; i<names.length; i++){
                option = document.createElement('option');
                option.className = "menu";
                option.innerHTML = names[i];
                document.body.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[9].appendChild(option);
            }
        });
    }
    function someError(errorType){
        document.body.childNodes[13].childNodes[3].textContent = errorType;
        document.body.childNodes[3].style.display = "none";
        document.body.childNodes[5].style.display = "none";
        document.body.childNodes[7].style.display = "none";
        document.body.childNodes[9].style.display = "none";
        document.body.childNodes[11].style.display = "none";
        document.body.childNodes[13].style.display = "block";
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
    }

    // обработчики кнопок

    function regName(){

        // if(document.body.childNodes[9].childNodes[3].childNodes[3].childNodes[3].value == ""){
        //     alert("ВВЕДИТЕ ЛОГИН");
        //     return 0;
        // }
        // if(document.body.childNodes[9].childNodes[3].childNodes[3].childNodes[7].value == ""){
        //     alert("ВВЕДИТЕ ПАРОЛЬ");
        //     return 0;
        // }
        // for(var i=0; i<logins.length; i++){
        //         if(document.body.childNodes[9].childNodes[3].childNodes[3].childNodes[3].value == logins[i]){
        //             if(document.body.childNodes[9].childNodes[3].childNodes[3].childNodes[7].value == passwords[i]){
        //
        //                 logIn(document.body.childNodes[9].childNodes[3].childNodes[3].childNodes[3].value);
        //
        //                 document.body.childNodes[3].style.display = "block";
        //                 document.body.childNodes[9].style.display = "none";
        //                 return 0;
        //             }else{
        //                 someError("неверный пароль");
        //                 return;
        //             }
        //         }
        //     }
        //     someError("неверный логин");


        var promise = new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/login', false)
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(
                {username:document.body.childNodes[9].childNodes[3].childNodes[3].childNodes[3].value,
                 password:document.body.childNodes[9].childNodes[3].childNodes[3].childNodes[7].value
                }));
            if(xhr.status == 200){
                logIn(document.body.childNodes[9].childNodes[3].childNodes[3].childNodes[3].value);
                                document.body.childNodes[3].style.display = "block";
                                document.body.childNodes[9].style.display = "none";
                                return 0;
            }else  someError("registration error");
            console.log(window.status);
            resolve(xhr);
        });

        return 0;
    }
    function saveEdit(){
        var content = document.body.childNodes[5].childNodes[1].childNodes[7].childNodes[3].value;
        var title = document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[3].value;
        var summary = document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[7].value;

        var promise = new Promise(function(resolve, reject) {
            if(articlesService.editArticle(onWall[tempID].id,
                    {id:'34',title: title,summary: summary, createdAt: new Date('1991-08-15T23:12:44'),
                        author:'ItsIam',content: content}))  resolve("AllRirht");
            else  reject("SaveBroken");
        });

        promise.then(function(response) {
            if(response == "AllRirht"){
                articles = articlesService.getArticles(0,articlesService.articles().length+1);
                var articles2 =[];
                for(var i=0; i< articles.length; i++){
                    if(articles[i].isDeleted != 'true'){
                        articles2.push(articles[i]);
                    }
                }
                articles = articles2;
                return articles;
            }
        })
        .then(function(response){
            articles = response;
            for(var i=0; i<articles.length; i++){
                for(var j=0; j<onWall.length; j++) {
                    if (articles[i].id == onWall[j].id) onWall[j] = articles[i];
                }
            }
            var id2 =  document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[11].textContent;
            document.body.childNodes[5].style.display = "none";
            for(var i=0; i<onWall.length; i++){
                if(onWall[i].id==id2)  tempID=i;
            }
            getFullNews(tempID);
            rewriteNews();
        });
    }
    function goToReg(){
        if(UserName == ""){
            document.body.childNodes[3].style.display = "none";
            document.body.childNodes[5].style.display = "none";
            document.body.childNodes[7].style.display = "none";
            document.body.childNodes[9].style.display = "block";
            document.body.childNodes[11].style.display = "none";
            document.body.childNodes[13].style.display = "none";
        }else logIn("");
    }
    function goToEdit(number){
        if(UserName != "" && cantShow[number]== false){
            tempID =number;
            document.body.childNodes[3].style.display = "none";
            document.body.childNodes[5].style.display = "block";
            document.body.childNodes[5].childNodes[1].childNodes[7].childNodes[3].value = onWall[number].content;
            document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[3].value = onWall[number].title;
            document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[7].value = onWall[number].summary;
            document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[11].textContent = onWall[number].id;
        }
    }
    function loadNew(){
        var id2 = articlesService.articles().length +1;

        var promise = new Promise(function(resolve, reject) {
            if(articlesService.addArticle(
                    {   id:id2.toString(),
                        isDeleted: 'false',
                        title: document.body.childNodes[7].childNodes[3].childNodes[5].value.toString(),
                        summary: document.body.childNodes[7].childNodes[3].childNodes[9].value.toString(),
                        createdAt: new Date(),
                        author: UserName,
                        content: document.body.childNodes[7].childNodes[7].childNodes[3].value.toString(),
                    }))  resolve("AllRirht");
            else  reject("SaveBroken");
        });

        promise.then(function(response) {
            if(response == "AllRirht"){
                articles = articlesService.getArticles(0,articlesService.articles().length+1);
                var articles2 =[];
                for(var i=0; i< articles.length; i++){
                    if(articles[i].isDeleted != 'true'){
                        articles2.push(articles[i]);
                    }
                }
                articles = articles2;
                return articles;
            }
        })
            .then(function(response){
                articles = response;
                var onWall =  articles.slice(0,6);
                for(var i=0; i<6; i++) {
                    if (onWall.length <= i) cantShow[i] = true;
                    else  cantShow[i] = false;
                }

                findAuthors();
                rewriteNews();
                nextPage();
                lastPage();
                for(var i=0; i<onWall.length; i++) if(onWall[i].id==id2)  tempID=i;
                document.body.childNodes[7].style.display = "none";
                getFullNews(0);
            });
    }
    function goToAdd(){
        if(UserName != "") {
            document.body.childNodes[7].style.display = "block";
            document.body.childNodes[3].style.display = "none";
        }
    }
    function deleteNews(id2){
        if(UserName != "" && cantShow[id2]== false){
            var promise = new Promise(function(resolve, reject) {
                articlesService.removeArticle(onWall[id2].id);
                resolve("AllRirht");
            });

            promise.then(function(response) {
                if(response == "AllRirht"){
                    articles = articlesService.getArticles(0,articlesService.articles().length+1);
                    var articles2 =[];
                    for(var i=0; i< articles.length; i++){
                        if(articles[i].isDeleted != 'true'){
                            articles2.push(articles[i]);
                        }
                    }
                    articles = articles2;
                    onWall = articles.slice(0,6);
                    for(var i=0; i<6; i++) {
                        if (onWall.length <= i) cantShow[i] = true;
                        else  cantShow[i] = false;
                    }
                    return articles;
                }
            })
                .then(function(response){
                    articles = response;
                    if(onWall.length == 0){
                        articles = articlesService.getArticles(0,articlesService.articles().length+1);
                        for(var i=0; i< articles.length; i++)  articles[i].isDeleted = 'false';
                        var xhrt = new XMLHttpRequest();
                        xhrt.open('POST', 'loadBase', false);
                        xhrt.setRequestHeader('Content-Type', 'application/json');
                        xhrt.send(JSON.stringify(articles));
                        articles = articlesService.getArticles(0,articlesService.articles().length+1);
                        onWall = articles.slice(0,6);
                        for(var i=0; i<6; i++)   cantShow[i] = false;
                        someError("Новостей больше нет");
                    }
                    findAuthors();
                    nextPage();
                    lastPage();
                    rewriteNews();
                });
        }
    }
    function getFullNews(id){
        document.body.childNodes[11].style.display = "block";
        document.body.childNodes[3].style.display = "none";
        tempID = id;
        if(UserName == ""){
           document.body.childNodes[11].childNodes[3].childNodes[3].style.display = "none";
           document.body.childNodes[11].childNodes[3].childNodes[5].style.display = "none";
        }else{
            document.body.childNodes[11].childNodes[3].childNodes[3].style.display = "block";
            document.body.childNodes[11].childNodes[3].childNodes[5].style.display = "block";
        }
        document.body.childNodes[11].childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent = onWall[id].title;
        document.body.childNodes[11].childNodes[1].childNodes[1].childNodes[3].childNodes[1].textContent = onWall[id].content;
        document.body.childNodes[11].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1].textContent = onWall[id].author
        document.body.childNodes[11].childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[1].textContent = onWall[id].createdAt.toDateString();
    }
    function filterNews(){
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

        var promise = new Promise(function(resolve, reject) {
            articles = articlesService.getArticles(0,articlesService.articles().length+1);
            resolve("AllRirht");
        });

        promise.then(function(response) {
            if(response == "AllRirht"){
                var articles2 =[];
                for(var i=0; i< articles.length; i++){
                    if(articles[i].isDeleted != 'true'){
                        articles2.push(articles[i]);
                    }
                }
                articles = articles2;
                for(var i=0; i<articles.length; i++){
                    for(var j=0; j<onWall.length; j++) {
                        if (articles[i].id == onWall[j].id) onWall[j] = articles[i];
                    }
                }
                if(value1 == null && value2 == null && (txt=="" || txt=="--Автор--")){
                    articles = articlesService.getArticles(0,articlesService.articles().length+1);
                    var articles2 =[];
                    for(var i=0; i< articles.length; i++){
                        if(articles[i].isDeleted != 'true'){
                            articles2.push(articles[i]);
                        }
                    }
                    articles = articles2;
                    onWall = articles.slice(0,6);
                }
                else{
                    if((value1 != null || value2 != null)&& txt!="" && txt!="--Автор--"){
                        articles = articlesService.getArticlesTimeFilter(0,articlesService.articles().length+1,{createdAt:value1},{createdAt:value2},{author:txt});
                        var articles2 =[];
                        for(var i=0; i< articles.length; i++){
                            if(articles[i].isDeleted != 'true'){
                                articles2.push(articles[i]);
                            }
                        }
                        articles = articles2;
                        onWall = articles.slice(0,6);
                    }
                    else{
                        if(txt!=""&& txt!="--Автор--"){
                            articles = articlesService.getArticles(0,articlesService.articles().length+1,{author:txt});
                            var articles2 =[];
                            for(var i=0; i< articles.length; i++){
                                if(articles[i].isDeleted != 'true'){
                                    articles2.push(articles[i]);
                                }
                            }
                            articles = articles2;
                            onWall = articles.slice(0,6);
                        }
                        else{
                            articles = articlesService.getArticlesTimeFilter(0,articlesService.articles().length+1,{createdAt:value1},{createdAt:value2});
                            var articles2 =[];
                            for(var i=0; i< articles.length; i++){
                                if(articles[i].isDeleted != 'true'){
                                    articles2.push(articles[i]);
                                }
                            }
                            articles = articles2;
                            onWall = articles.slice(0,6);
                        }
                    }
                }
                return "AllRight";
            }
        })
            .then(function(response){
               if(response = "AllRight"){
                   for(var i=0; i<6; i++){
                       if(onWall.length <= i) cantShow[i] = true;
                       else  cantShow[i] = false;
                   }
                   paginCounter=-1;
                   lastPage();
                   nextPage();
                   rewriteNews();
               }
            });
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
            }rewriteNews();
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
            }rewriteNews();
        }
        if(paginCounter <=0) document.body.childNodes[3].childNodes[3].childNodes[5].style.opacity=0;
        else document.body.childNodes[3].childNodes[3].childNodes[5].style.opacity=0.8;
        if(articles.slice((paginCounter+1)*6,(paginCounter+1)*6+6).length ==0) document.body.childNodes[3].childNodes[3].childNodes[7].style.opacity=0;
        else document.body.childNodes[3].childNodes[3].childNodes[7].style.opacity=0.8;
    }
    function fromFullToEdit(){
        if(UserName != ""){
            document.body.childNodes[11].style.display = "none";
            document.body.childNodes[5].style.display = "block";
            document.body.childNodes[5].childNodes[1].childNodes[7].childNodes[3].value = onWall[tempID].content;
            document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[3].value = onWall[tempID].title;
            document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[7].value = onWall[tempID].summary;
            document.body.childNodes[5].childNodes[1].childNodes[3].childNodes[11].textContent = onWall[tempID].id;
        }
    }
    function deleteFromFull(){
        if(UserName != ""){
            document.body.childNodes[11].style.display = "none";
            document.body.childNodes[3].style.display = "block";
            var promise = new Promise(function(resolve, reject) {
                articlesService.removeArticle(onWall[tempID].id);
                resolve("AllRirht");
            });

            promise.then(function(response) {
                if(response == "AllRirht"){
                    articles = articlesService.getArticles(0,articlesService.articles().length+1);
                    var articles2 =[];
                    for(var i=0; i< articles.length; i++){
                        if(articles[i].isDeleted != 'true'){
                            articles2.push(articles[i]);
                        }
                    }
                    articles = articles2;
                    onWall = articles.slice(0,6);
                    for(var i=0; i<6; i++) {
                        if (onWall.length <= i) cantShow[i] = true;
                        else  cantShow[i] = false;
                    }
                    return articles;
                }
            })
                .then(function(response){
                    articles = response;
                    if(onWall.length == 0){
                        articles = articlesService.getArticles(0,articlesService.articles().length+1);
                        for(var i=0; i< articles.length; i++)  articles[i].isDeleted = 'false';
                        var xhrt = new XMLHttpRequest();
                        xhrt.open('POST', 'loadBase', false);
                        xhrt.setRequestHeader('Content-Type', 'application/json');
                        xhrt.send(JSON.stringify(articles));
                        articles = articlesService.getArticles(0,articlesService.articles().length+1);
                        onWall = articles.slice(0,6);
                        for(var i=0; i<6; i++)   cantShow[i] = false;
                        someError("Новостей больше нет");
                    }
                    findAuthors();
                    nextPage();
                    lastPage();
                    rewriteNews();
                });
        }

    }
    function toIndex(){
        document.body.childNodes[3].style.display = "block";
        document.body.childNodes[13].style.display = "none";
        document.body.childNodes[11].style.display = "none";
    }

    ///////////////////////

    document.body.childNodes[3].style.display = "block";
    document.body.childNodes[5].style.display = "none";
    document.body.childNodes[7].style.display = "none";
    document.body.childNodes[9].style.display = "none";
    document.body.childNodes[11].style.display = "none";
    document.body.childNodes[13].style.display = "none";

    var promise = new Promise(function(resolve, reject) {
        articles = articlesService.getArticles(0,articlesService.articles().length+1);
        var articles2 =[];
        for(var i=0; i< articles.length; i++){
            if(articles[i].isDeleted != 'true'){
                articles2.push(articles[i]);
            }
        }
        articles = articles2;
        onWall = articlesService.getArticles(0,6);
        resolve("AllRirht");
    });
    promise.then(function(response) {
        if(response == "AllRirht"){
            nextPage();
            lastPage();
            logIn(UserName);
            rewriteNews();
            findAuthors();
        }
    });

    return{
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
        toIndex: toIndex,
        fromFullToEdit: fromFullToEdit,
        deleteFromFull: deleteFromFull,
    }
}());

