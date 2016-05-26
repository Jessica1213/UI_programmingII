// Put event listeners into place
window.addEventListener("DOMContentLoaded", function() {
    // Grab elements, create settings, etc.

    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = { "video": true },
        errBack = function(error) {
            console.log("Video capture error: ", error.code);
        };

    // Put video listeners into place
    if(navigator.getUserMedia) { // Standard
        navigator.getUserMedia(videoObj, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(videoObj, function(stream){
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
    else if(navigator.mozGetUserMedia) { // Firefox-prefixed
        navigator.mozGetUserMedia(videoObj, function(stream){
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }

    // Trigger photo take
    document.getElementById("snap").addEventListener("click", function() {
        var wsize = document.getElementById("canvas").width;//get canvas size
        //console.log(wsize);
        context.drawImage(video, 0, 0, wsize, wsize-150);

        //save snapshotImage pass to home page
        var snapshotImg = new Image();
        snapshotImg.src = canvas.toDataURL('image/png', 0.5); //Second param is jpg quality
        sessionStorage.setItem("pic", snapshotImg.src); //save the picture src
    });

}, false);

function login() {
    var username = $('#username').val();
    console.log(username);
    sessionStorage.setItem("username", username);
    window.location.href = "home.html";
}
