$(document).ready(function() {
    var url = new URL(window.location.href);
    var p = url.searchParams.get("p");
    var posts;
    $.get("/posts/posts.json", function(response, status) {
        if (status == "success") {
            posts = response.posts;
        } else {
            $("#markdown-viewer").html("Internal Site Error. (JSON post catalog not found)");
            return;
        }
        if (p !== null) {
            $.get("/posts/" + posts[parseInt(p)].file, function(response, status) {
                if (status == "success") {
                    var parsedMd = marked.parse(response);
                    $("#markdown-viewer").html(parsedMd);
                } else {
                    $("#markdown-viewer").html("Failed to load post. Check URL.")
                    return;
                }
            });
        } else {
            $("#markdown-viewer").html("No post specified. Check URL.")
            return;
        }
    });
});