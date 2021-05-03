$(document).ready(function() {
    var chirpsUl = $("#chirpsUl");
    var submitBtn = $("#submitChirp");

    submitBtn.on("click", function() {
        var chirpContent = $("#chirpContent").val();
        var chirpObject = {
            text: chirpContent
        }
        createChirp(chirpObject);
    });

    getChirps();
    function getChirps() {
        $.get("/api/chirps", function(chirps) {
            var chirpsToAdd = [];
            for (var i = 0; i < chirps.length; i++)
            createNewRow(chirps[i]);
        });
    }
    
    function createNewRow(chirp) {
        var newPostLI = $("<li>");
        var likeButton = $("<button class=button-primary id=likeChirp>like</button>");
        newPostLI.text(`${chirp.id} -- ${chirp.text.toUpperCase()}--${chirp.likeTotal > 0 ? chirp.likeTotal : 0 } likes `);
        newPostLI.append(likeButton);
        chirpsUl.append(newPostLI);
    }

    function likeChirp(chirpId) {

        $.patch("/api/chirps", chirpId)
    }

    function createChirp(chirp) {
        $.post("/api/chirps", chirp)
        .then(chirpsUl.empty())
        .then(getChirps());
    }
});
