//some random stuff to try to organize my thoughts. No idea....
var questions1 = questions[0].title;
var answerOne = questions[0].choices[0];
var answerTwo = questions[0].choices[1];
var answerThree = questions[0].choices[2];
var answerFour = questions[0].choices[3];
var selectAnswer = questions[0].answer;
var i = 0;
var answerList = questions[0];
var usrChoice;

var answerBtn1 = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");

document.getElementById("Questions").innerText = questions1;
document.getElementById("answer1").innerText = answerOne;
document.getElementById("answer2").innerText = answerTwo;
document.getElementById("answer3").innerText = answerThree;
document.getElementById("answer4").innerText = answerFour;

answerBtn1.addEventListener("click", function(){
    event.preventDefault();
    usrChoice = answerOne;
    checkAnswer();
    setAnswer();

});
answerBtn2.addEventListener("click", function(){
    event.preventDefault();
    usrChoice = answerTwo;
    checkAnswer();
    setAnswer();

});
answerBtn3.addEventListener("click", function(){
    event.preventDefault();
    usrChoice = answerThree;
    checkAnswer();
    setAnswer();

});
answerBtn4.addEventListener("click", function(){
    event.preventDefault();
    usrChoice = answerFour;
    checkAnswer();
    setAnswer();
});

function setAnswer(){
    i++;
    questions1 = questions[i].title;
    answerOne = questions[i].choices[0];
    answerTwo = questions[i].choices[1];
    answerThree = questions[i].choices[2];
    answerFour = questions[i].choices[3];
    selectAnswer = questions[i].answer;
    console.log("infunction");
    document.getElementById("Questions").innerText = questions1;
    document.getElementById("answer1").innerText = answerOne;
    document.getElementById("answer2").innerText = answerTwo;
    document.getElementById("answer3").innerText = answerThree;
    document.getElementById("answer4").innerText = answerFour;
}

function checkAnswer(){
    selectAnswer = questions[i].answer;
    if (selectAnswer === usrChoice){
        console.log("right");
    }
    else{
        console.log("not right");
    }
}