
var nextQuestion = 0; // index for questionList array
var timeLimit = 15
var clockInterval ;
var timeLeft = timeLimit; 

var questionList = [{
        question: 'What was the first full length CGI movie?',
        answerList: [{
                answer: "A Bug's Life",
                isCorrect: false 
            },
            {
                answer: "Monsters Inc.",
                isCorrect: false
            },
            {
                answer: "Toy Story",
                isCorrect: true
            },
            {
                answer: "The Lion King",
                isCorrect: false
            }
        ]
}];



$(document).ready(function () {

    console.log("$(document) is ready");
    $(".start-div").on('click', 'button', onStartButtonClick);
    $(".game-div").on('click', '.game-answer', onGameAnswerClick);
    showStartButton();

});

//                          _ _      _     
//       ___  _ __      ___| (_) ___| | __ 
//      / _ \| '_ \    / __| | |/ __| |/ / 
//     | (_) | | | |  | (__| | | (__|   <  
//      \___/|_| |_|   \___|_|_|\___|_|\_\ 
//                                         

function onStartButtonClick() {

    console.log("onStartButtonClick called");
    showNextQuestion();
    startClock();
};

function onGameAnswerClick() {
    
    console.log("onGameAnswerClick called")
    var $thisAnswer = $(this);
    // console.log("This is", $thisAnswer );
    var isCorrect = $thisAnswer.attr("data-correct");
    if (isCorrect == "true") {
        stopClock();
        console.log("answer was orrect")
        $thisAnswer.css('background-color', 'green');
        $thisAnswer.css("color", "white")
    } else {
        stopClock();
        console.log ("answer was wrong :( ")
        $thisAnswer.css('background-color', 'red');
        $thisAnswer.css("color", "white")
        showAnswerWasWrong()
   };

};


//       __                  _   _                  
//      / _|_   _ _ __   ___| |_(_) ___  _ __  ___  
//     | |_| | | | '_ \ / __| __| |/ _ \| '_ \/ __| 
//     |  _| |_| | | | | (__| |_| | (_) | | | \__ \ 
//     |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/ 
//                                                  

function showNextQuestion() {

    console.log("showNextQuestion called")

    var $startDiv = $(".start-div");
    var $gameDiv = $(".game-div");
    var i = nextQuestion;

    var htmlText = "";
    htmlText += '<div class="row">';
    htmlText += '   <div class="col col-12-sm text-center">';
    htmlText += '       <p class="game-question">' + questionList[i].question + '</p>';
    htmlText += '       <a class="game-answer" data-correct="' + questionList[i].answerList[0].isCorrect + '">' + questionList[i].answerList[0].answer + '</a><br>';
    htmlText += '       <a class="game-answer" data-correct="' + questionList[i].answerList[1].isCorrect + '">' + questionList[i].answerList[1].answer + '</a><br>';
    htmlText += '       <a class="game-answer" data-correct="' + questionList[i].answerList[2].isCorrect + '">' + questionList[i].answerList[2].answer + '</a><br>';
    htmlText += '       <a class="game-answer" data-correct="' + questionList[i].answerList[3].isCorrect + '">' + questionList[i].answerList[3].answer + '</a><br>';
    htmlText += '   </div>';
    htmlText += '</div>';

    //   console.log("htmlText is",htmlText )   questionList[i].answerList[1].isCorrect

      $gameDiv.empty();
      $gameDiv.html(htmlText);
      $startDiv.empty();

    //   i = i + 1;
    //   if (i>questionList.length-1) { I = 0}
  
}

function showStartButton() {

    console.log("showStartButton was called");
    var $startDiv = $(".start-div");
    var $gameDiv = $(".game-div");
    var htmlText = "";
    htmlText += '<div class="row">';
    htmlText += '   <div class="col col-12-sm text-center">';
    htmlText += '       <button id="start-button">Start</button>';
    htmlText += '   </div>';
    htmlText += '</div>';
    $gameDiv.html("")
    $startDiv.html(htmlText);
}


function showAnswerWasWrong() {

    console.log("showAnswerWasWrong was called");
    var q = nextQuestion;
    var correctAnswer = 'Unknown";'

    for (a=0; a < questionList[q].answerList.length; a=a+1) {
        if (questionList[q].answerList[a].isCorrect == true ) {
            correctAnswer = questionList[q].answerList[a].answer;
        };
    };

    var $gameDiv = $(".game-div");
    var htmlText = "";
    htmlText += '<div class="row">';
    htmlText += '   <div class="col col-12-sm text-center">';
    htmlText += '       <p>Nope!</p>';
    htmlText += '   </div>';
    htmlText += '</div>';
    htmlText += '<div class="row">';
    htmlText += '   <div class="col col-12-sm text-center">';
    htmlText += '       <p>The correct answer was ' + correctAnswer + '</p>';
    htmlText += '   </div>';
    htmlText += '</div>';
    htmlText += '<div class="row">';
    htmlText += '   <div class="col col-12-sm text-center">';
    htmlText += '       <p></p>';
    htmlText += '   </div>';
    htmlText += '</div>';

    $gameDiv.empty();
    $gameDiv.html(htmlText);

    // showNextQuestion() 
    setTimeout("showNextQuestion(); startClock()", 4000);

}


function startClock() {
    clearInterval(clockInterval);
    timeLeft = timeLimit;
    var $clockDiv = $(".clock-div");
    console.log("clockDiv",$clockDiv);
    $clockDiv.text( "Time remaining is " + timeLeft.toString() + " seconds");
    clockInterval = setInterval(clockCountDown, 1000);
};

function clockCountDown() {
    timeLeft = timeLeft - 1;
    if (timeLeft <= 0) {
      clearInterval(clockInterval);
      alert("Time's Up!!!");
    } 
    $('.clock-div').text( "Time remaining is " + timeLeft.toString() + " seconds");
    console.log("timeLeft", timeLeft)
  }

  function stopClock() {
    clearInterval(clockInterval);
  }