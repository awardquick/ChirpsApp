$(document).ready(function() {
    var chirpsUl = $("#chirpsUl");
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
        newPostLI.text(`${chirp.id} -- ${chirp.text}`);
        chirpsUl.append(newPostLI);
    }
});
