
var questions = new Array();
var questionIndex = 0;
questions[0] = "HORSE??? ";
questions[1] = "9-5 = ???";


$(document).ready(function() {
    setQuestionAndAnswer();

    animateDiv($('.a'));
    animateDiv($('.b'));
    animateDiv($('.c'));
    animateDiv($('.d'));

});

function setQuestionAndAnswer(){
    document.getElementById("question").innerHTML = questions[questionIndex];
    /*var c = document.getElementById("questionCanvas");
     var ctx = c.getContext("2d");
     ctx.font = "10px Arial";
     ctx.strokeText(questions[questionIndex],30,100);*/

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
        animateDiv($target);
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

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=='dImg') {
        //ev.target.appendChild(document.getElementById(data));
        makeStar();
        questionIndex++;
        if(questionIndex<2)
        setQuestionAndAnswer();
    }


}

function makeStar(){
    var star= '<img src="pic/star.png" height="50px" width="50px">';
    var resultDiv= document.getElementById("resultDiv");
    $("#scores").append(star);
}
