$(document).ready(function() {
    var posts;
    $.get("/posts/posts.json", function(response, status) {
        if (status == "success") {
            posts = response.posts;
        } else {
            $("#markdown-viewer").html("Internal Site Error. (JSON post catalog not found)");
            return;
        }
        for (var i = 0; i < posts.length; i++) {
            $("#post-list").append("<li><a href=\"viewer/?p=" + i + "\"><h3>" + posts[i].name + "</h3><p>" + posts[i].date + "</p></a></li>");
        }
    });
});