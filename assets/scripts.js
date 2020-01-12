//some random stuff to try to organize my thoughts. No idea....
document.getElementById("Questions").innerText = "THANKS FOR STARTING THIS QUIZ";
document.getElementById("answer1").innerText = questions[0].choices[0];
document.getElementById("answer2").innerText = questions[0].choices[1];
document.getElementById("answer3").innerText = questions[0].choices[2];
document.getElementById("answer4").innerText = questions[0].choices[3];

var questionNum = 0;
var score = 0;


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
    }
    if(buttonSelector.innerText === questions[0].answer && 
        childrenEle.type === 'submit' && 
        questionNum < 5 && 
        childrenEle.innerText != "Start"){

        console.log('correct');
        score ++;
        questionNum++;        
        setAnswer(thing);
    }
    else if(childrenEle.type === 'submit' && questionNum < 5 && childrenEle.innerText != "Start")
    {
        questionNum++;        
        console.log('wrong');
        setAnswer(thing);
    }

    else if(questionNum == 5){
        document.getElementById("answer1").style.display = "none";
        document.getElementById("answer2").style.display = "none";
        document.getElementById("answer3").style.display = "none";
        document.getElementById("answer4").style.display = "none";
        document.getElementById("initials").style.display = "block";
        document.getElementById("submit").style.display = "block";
        document.getElementById("submit").innerText = "submit";
        document.getElementById("Questions").innerText = "ENTER YOUR INITIALS";
        document.getElementById("header").style.display = "block";
        document.getElementById("header").innerText = "All Done";
        document.getElementById("final").style.display = "block";
        document.getElementById("final").innerText = "Your final score " + score;

        document.getElementById("submit").addEventListener("click", function () {
            submit();
        });
    }

    
});



function setAnswer(er){
    for(a = 0; a < er.length - 2 ; a++ ){
        er[0].innerText = questions[questionNum].title;
        er[a+2].innerText = questions[questionNum].choices[a];
    };

}

function submit(){
    console.log("done");
    window.location.href = 'highscores.html';
}