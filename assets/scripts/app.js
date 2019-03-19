
var i = 0; // index for questionList array 

var questionList = [{
        question: 'What was the first full length CGI movie?',
        answerList: [{
                answer: "A Bug's Life",
                isCorrect: true
            },
            {
                answer: "Monsters Inc.",
                isCorrect: false
            },
            {
                answer: "Toy Story",
                isCorrect: false
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

function onStartButtonClick() {

    console.log("onStartButtonClick called");
    startNewGame();
};

function onGameAnswerClick() {
    
    console.log("onGameAnswerClick called")
    var $thisAnswer = $(this);
    // console.log("This is", $thisAnswer );
    var isCorrect = $thisAnswer.attr("data-correct");
    if (isCorrect == "true") {
        console.log("Your are Correct!")
        $thisAnswer.css('background-color', 'green');
        $thisAnswer.css("color", "white")
    } else {
        console.log ("you are wrong :( ")
        $thisAnswer.css('background-color', 'red');
        $thisAnswer.css("color", "white")
   };

};

function startNewGame() {

    console.log("startNewGame called")

    var $startDiv = $(".start-div");
      var $gameDiv = $(".game-div");

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

      i = i + 1;
      if (i>questionList.length-1) { I = 0}
  
}

function showStartButton() {

    console.log("showStartButton was called");
    var $startDiv = $(".start-div");
    var $gameDiv = $(".game-div");
    var htmlText = "";
    htmlText += '<div class="row">';
    htmlText += '   <div class="col col-12-sm text-center">';
    // htmlText += '    <div class="text-center">';
    htmlText += '       <button id="start-button">Start</button>';
    // htmlText += '    </div>';
    htmlText += '   </div>';
    htmlText += '</div>';
    $gameDiv.html("")
    $startDiv.html(htmlText);
}