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

var questions = new Array();//this array is for storing the questions as strings
var questionIndex = 0;//this variable counts and determines the questions to show

questions[0] = "Q1 : Which one is HORSE ??? ";
questions[1] = "Q2 : 9-5 = ???";
//it can be continued...


$(document).ready(function() {

    setQuestionAndAnswer();//when the page loads for the first time, this function is called to show the first question

    animateDiv($('.a'));
    animateDiv($('.b'));
    animateDiv($('.c'));
    animateDiv($('.d'));

});


//This function shows the question. It shows the answers of each question as images as well.
function setQuestionAndAnswer(){
    document.getElementById("question").innerHTML = questions[questionIndex];
    /*var c = document.getElementById("questionCanvas");
     var ctx = c.getContext("2d");
     ctx.font = "10px Arial";
     ctx.strokeText(questions[questionIndex],30,100);*/


    /*The answers of each question are inside the folder pic/indexOfQuestion
    for example the answers of the first question is in the path pic/0, the second one in the path pic/1
    **/
    src="pic/" + questionIndex + "/a.png";
    var aImg= document.getElementById("aImg");
    aImg.setAttribute("src",src);
    aImg.setAttribute("height","150px");
    aImg.setAttribute("width","150px");

    src="pic/" + questionIndex + "/b.png";
    var bImg = document.getElementById("bImg");
    bImg.setAttribute("src",src);
    bImg.setAttribute("height","150px");
    bImg.setAttribute("width","150px");

    src="pic/" + questionIndex + "/c.png";
    var cImg = document.getElementById("cImg");
    cImg.setAttribute("src",src);
    cImg.setAttribute("height","150px");
    cImg.setAttribute("width","150px");

    src="pic/" + questionIndex + "/d.png";
    var dImg = document.getElementById("dImg");
    dImg.setAttribute("src",src);
    dImg.setAttribute("height","150px");
    dImg.setAttribute("width","150px");
}



//This function determines new position for each animated image randomly
function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() - (25*($container.height())/100);
    var w = $container.width() - (25*($container.width())/100);

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}


function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);//animates for ever
    });

}

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


/*when one animated image as an answer is dropped on to the basket,
this function is called in order to check the correctness of the answer*/
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=='dImg') {//if the answer is correct, green star pops out and the next question appears

        makeStar();
        questionIndex++;
        if(questionIndex<2)
        setQuestionAndAnswer();
    }
    else{//if the answer is wrong, a red star pops up for 0.5 second
        var redStar= '<img id="redStar" src="pic/redStar.png" height="50px" width="50px">';
        var resultDiv= document.getElementById("resultDiv");
        $("#scores").append(redStar);
        window.setTimeout(removeRedStar,500);//after 0.5 sec, removeRedStar() is called
    }
}

function removeRedStar(){
    $("#redStar").remove();
}

//This function makes a green star as a score
function makeStar(){
    var star= '<img src="pic/star.png" height="50px" width="50px">';
    var resultDiv= document.getElementById("resultDiv");
    $("#scores").append(star);
}
