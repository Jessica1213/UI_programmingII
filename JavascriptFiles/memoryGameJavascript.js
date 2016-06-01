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
/**
 * Created by MA on 5/13/2016.
 */
var questions = new Array();//this array is for storing the questions as strings
var questionIndex = 0;//this variable counts and determines the questions to show
questions[0] = "HORSE??? ";
questions[1] = "9-5 = ???";
//it can be continued...

$(document).ready(function() {
    //when the page loads for the first time, this function is called to show the first question
    showCards();
});

//This function show four cards. one of these cards is the answer.
function showCards(){
    document.getElementById("question").innerHTML = "";

    src="pic/" + questionIndex + "/a.png";
    var aImg= '<img id="img1" src="' + src + '" height="150px" width="150px">';
    $("#a").append(aImg);

    src="pic/" + questionIndex + "/b.png";
    var bImg= '<img id="img2" src="' + src + '" height="150px" width="150px">';
    $("#b").append(bImg);

    src="pic/" + questionIndex + "/c.png";
    var cImg= '<img id="img3" src="' + src + '" height="150px" width="150px">';
    $("#c").append(cImg);

    src="pic/" + questionIndex + "/d.png";
    var dImg= '<img id="img4" src="' + src + '" height="150px" width="150px">';
    $("#d").append(dImg);



    window.setTimeout(setQuestionAndAnswer,3000);
}


//This function shows the question. It shows the answers of each question as images as well.
function setQuestionAndAnswer(){

    //First, the answers that were going to be memorized are deleted
    $("#img1").remove();
    $("#img2").remove();
    $("#img3").remove();
    $("#img4").remove();

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




//Whenever a user chooses an option as an answer, this function is called
function checkAnswer(questionID) {

    if(questionID.id=='d') {//if the answer is correct, green star pops out and the next question appears
        //ev.target.appendChild(document.getElementById(data));
        makeStar();
        questionIndex++;
        if(questionIndex<2)
            window.setTimeout(showCards,2000);
    }
    else{//if the answer is wrong, a red star pops up for 0.5 second
        var redStar= '<img id="redStar" src="pic/redStar.png" height="50px" width="50px">';
        var resultDiv= document.getElementById("resultDiv");
        $("#scores").append(redStar);
        window.setTimeout(removeRedStar,500);
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