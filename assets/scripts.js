//some random stuff to try to organize my thoughts. No idea....
var questionNum = 0;
var score = 0;
var currentNameScores = localStorage.getItem("highscore");
var startTime = 75;
document.getElementById("Questions").innerText = "THANKS FOR STARTING THIS QUIZ";
document.getElementById("answer1").innerText = questions[0].choices[0];
document.getElementById("answer2").innerText = questions[0].choices[1];
document.getElementById("answer3").innerText = questions[0].choices[2];
document.getElementById("answer4").innerText = questions[0].choices[3];
document.getElementById("timer").innerHTML = startTime;


document.addEventListener("click", function(){
    var buttonSelector = event.toElement;
    var childrenEle = event.toElement;
    var thing = childrenEle.parentNode.children;
    event.preventDefault();

    if(childrenEle.innerText === "Start"){
        document.getElementById("Questions").innerText = questions[0].title;
        document.getElementById("answer1").style.display = "block";
        document.getElementById("answer2").style.display = "block";
        document.getElementById("answer3").style.display = "block";
        document.getElementById("answer4").style.display = "block";
        document.getElementById("start").style.display = "none";
        
        var startTimer = setInterval(function() {
            startTime--;
            document.getElementById("timer").innerHTML = startTime;
            if (startTime <= 0){
                changeWindow();
                clearTimeout(startTimer);
            }
          }, 1000);
    }
    if(buttonSelector.innerText === questions[questionNum].answer && 
        childrenEle.type === 'submit' && 
        questionNum <= 4 && 
        childrenEle.innerText != "Start"){
        score ++;
        questionNum++;        
        if(questionNum == 5){
            setScore();
        }
        else{
            setAnswer(thing);
        };
    }
    else if(childrenEle.type === 'submit' && questionNum <= 4 && childrenEle.innerText != "Start")
    {
        questionNum++;        
        startTime = startTime - 15; 
        if(questionNum == 5){
            setScore();
        }
        else{
            setAnswer(thing);        
        };

    };
});

document.getElementById("submitName").addEventListener("click", function(){
    var name = document.getElementById("initials").value;
    if(name === ''){
        alert("please enter valid name");
    }
    else{
        if(currentNameScores === null){
            currentNameScores = '';
            currentNameScores = currentNameScores+name+" - "+score+","; 
            localStorage.setItem("highscore", currentNameScores)
        }
        else{
            currentNameScores = currentNameScores+name+" - "+score+","; 
            localStorage.setItem("highscore", currentNameScores);
        }
        window.location = 'highscores.html';
    }
});


function setAnswer(er){
    for(a = 0; a < er.length - 2 ; a++ ){
        er[0].innerText = questions[questionNum].title;
        er[a+2].innerText = questions[questionNum].choices[a];
    };

}

function changeWindow(){
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("answer3").style.display = "none";
    document.getElementById("answer4").style.display = "none";
    document.getElementById("initials").style.display = "block";
    document.getElementById("submitName").style.display = "block";
    document.getElementById("submitName").innerText = "submit";
    document.getElementById("Questions").innerText = "ENTER YOUR INITIALS";
    document.getElementById("header").style.display = "block";
    document.getElementById("header").innerText = "All Done";
    document.getElementById("final").style.display = "block";
    document.getElementById("final").innerText = "Your final score " + score;
}


function setScore(){
    if (startTime < 0){
        startTime = 0;
    }
    score = startTime;
    startTime = 1;
    changeWindow();
    
}