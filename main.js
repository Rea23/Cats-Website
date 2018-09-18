document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("add-article-button").onclick = function() {Add_Article()};

    function Add_Article() {
        var picture_url;
        var article_heading;
        //picture_url = window.prompt("Unesite url slike:", "");
        article_heading = window.prompt("Unesite naslov clanka:", "");
    
        //add new article to main column
        var element_article = document.getElementsByClassName("article-container")[0];
        var clone_article = element_article.cloneNode(true);

        //set heading value to input value
        var element_article_heading = clone_article.getElementsByTagName('h3')[0];
        element_article_heading.textContent = article_heading;

        //set picture uri to input value
        //var element_article_picture = clone_article.getElementsByTagName('img')[0].getAttribute('src');
        //element_article_picture = picture_url;
        
        document.getElementById("main-column").appendChild(clone_article);

        //add new comment button into main column
        var element_commentBtn = document.getElementsByClassName("comment-article-button")[0];
        var clone_commentBtn = element_commentBtn.cloneNode(true);
        document.getElementById("main-column").appendChild(clone_commentBtn);
    }

    const deleteBtns = document.querySelectorAll(".article-container > .main-column-delete-button");
    for(const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener("click", Delete_Article);
    }

    function Delete_Article(e) {
        const deleteBtn = e.currentTarget;
        const article = deleteBtn.parentElement;
        const article_title = article.querySelector("h3");

        //delete article and comment button if confirmed
        if(confirm("Sigurno zelite izbrisati: " + article_title.textContent)) {
            const commentBtn = article.nextElementSibling;
            commentBtn.remove();
            article.remove();
        }
    }

    const commentBtns = document.querySelectorAll(".comment-article-button");
    for(const commentBtn of commentBtns) {
        commentBtn.addEventListener("click", Add_Comment);
    }

    function Add_Comment() {
        var comment_person;
        var comment_content;
        comment_person = window.prompt("Unesite svoje ime:", "");
        comment_content = window.prompt("Unesite svoj komentar:", ""); 

        //add new comment into comment section
        var element_comment_person = document.getElementsByTagName("p")[0];
        var clone_comment_person = element_comment_person.cloneNode(true);
        var element_comment_content = document.getElementsByTagName("p")[1];
        var clone_comment_content = element_comment_content.cloneNode(true);

        //set heading value to input value
        clone_comment_person.textContent = comment_person;
        clone_comment_content.textContent = comment_content;

        document.getElementById("comments-section").appendChild(clone_comment_person);
        document.getElementById("comments-section").appendChild(clone_comment_content);
    }

    document.getElementById("links-section-add-button").onclick = function() {Add_Link()};

    function Add_Link() {
        var link_name;
        var link_url;
        link_name = window.prompt("Unesite naziv linka:", "");
        link_url = window.prompt("Unesite url linka:", "");

        //add link into links section
        var element_link_name = document.getElementsByClassName("links-section-link")[0];
        var clone_link = element_link_name.cloneNode(true);

        document.getElementById("links-section").appendChild(clone_link);
    }

});
