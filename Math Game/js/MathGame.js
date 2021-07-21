var controlGame = false;
var score;
var action;
var timeremaining;
var correctAnswer;
var wrongAnswer;

//Generate Question and Answer
function generateQA(){
    var firstNum = Math.floor(Math.random() * 10);
    var secondNum = Math.floor(Math.random() * 10);

    //Fill question into question box
    document.getElementById("question").innerHTML  = firstNum + " + " + secondNum;

    //Get answer
    correctAnswer = firstNum + secondNum;

    var answerPosition = Math.floor(Math.random() * 4) + 1;

    //Fill random correct answer into answer box
    document.getElementById("answer" + answerPosition).innerHTML = correctAnswer;

    var answer = [correctAnswer];

    //Fill random wrong answer into answer box left
    for(i = 1; i < 5; i++){
        if(i != answerPosition){
            do{
                wrongAnswer = (Math.floor(Math.random() * 10)) + (Math.floor(Math.random() * 10));
            }while(answer.indexOf(wrongAnswer) > -1)
            
            document.getElementById("answer" + i).innerHTML = wrongAnswer;
            answer.push(wrongAnswer);
        }
    }
}

//Score, hide and show Correct and Wrong
for(i = 1; i < 5; i++){
    document.getElementById("answer" + i).onclick = function(){


        //If start button clicked
        if(controlGame == true){
            //If answer button is correct
            if(this.innerHTML == correctAnswer){
                //Inscrease score
                score++;
                document.getElementById("scoreValue").innerHTML = score;
                //Hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
                generateQA();
            }else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

//Count timer down
function countdownTimer(){
    action = setInterval(function(){

        //Decrease time 1 sec
        timeremaining--;

        document.getElementById("timerValue").innerHTML = timeremaining;

        //Timer to 0, Game Over
        if(timeremaining == 0){
            stopCountdown();
            show("gameOver");
            
            document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            hide("correct");
            hide("wrong");
            controlGame = false;

            //Change button to start
            document.getElementById("start-reset").innerHTML = "Start Game";
        }
    }, 1000);
}

//Stop countdown
function stopCountdown() {
	clearInterval(action);
}

//Hide
function hide(Id){
	document.getElementById(Id).style.display = "none";
}

//Show
function show(Id) {
	document.getElementById(Id).style.display = "block";
}

//Play Game
function startGame(){
    if(controlGame == true){
        location.reload();
    }else{
        controlGame = true;

        //Score
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;

        //Time
        timeremaining= 60;
        document.getElementById("timerValue").innerHTML = timeremaining;

        //Hide game over box
        hide("gameOver");

        //Change start to reset
        document.getElementById("start-reset").innerHTML = "Reset Game";

        //Countdown timer
        countdownTimer();

        //Generate question and answer
        generateQA();
    }
}