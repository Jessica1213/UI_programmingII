name = sessionStorage.getItem("username");
pic = sessionStorage.getItem("pic");

console.log(name);
console.log(pic);

$(function(){
    //show login user name
    document.getElementById("usernameLogin").innerHTML = name;
    document.getElementById("usericon").src = pic;
});
function playPause() { //play and pause backgroundmusic
    var music = document.getElementById('music2'); 
    var music_btn = document.getElementById('music_btn2'); 
    if (music.paused){ 
        music.play(); 
        music_btn.src = 'pic/On.png'; 
    } 
    else{ 
        music.pause(); 
        music_btn.src = 'pic/Off.png';  
    } 
} 