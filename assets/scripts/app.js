
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
    $(".game-div").on('click', 'button', handleStartButton);
    showStartButton();

});

function handleStartButton(event) {

    console.log("handleStartButton called")
    startNewGame()
}

function startNewGame() {

    console.log("startNewGame called")

    // $('.question').html(questions[counter].question);
    // var showingAnswers =
    //   '<p class="answer first-answer">' +
    //   questions[counter].answers[0].answer +
    //   '</p><p class="answer">' +
    //   questions[counter].answers[1].answer +
    //   '</p><p class="answer">' +
    //   questions[counter].answers[2].answer +
    //   '</p><p class="answer">' +
    //   questions[counter].answers[3].answer +
    //   '</p>';
    var $startDiv = $(".start-div");
      var $gameDiv = $(".game-div");

      var htmlText = "";
      htmlText += '<div class="row">';
      htmlText += '   <div class="col-12-sm">';
      htmlText += '       <p class="game-question">' + questionList[i].question + '</p>';
      htmlText += '       <a class="game-answer">' + questionList[i].answerList[0].answer + '</a><br>';
      htmlText += '       <a class="game-answer">' + questionList[i].answerList[1].answer + '</a><br>';
      htmlText += '       <a class="game-answer">' + questionList[i].answerList[2].answer + '</a><br>';
      htmlText += '       <a class="game-answer">' + questionList[i].answerList[3].answer + '</a><br>';
      htmlText += '   </div>';
      htmlText += '</div>';

      console.log("htmlText is",htmlText )

      $gameDiv.empty();
      $gameDiv.html(htmlText);
      $startDiv.empty();

      i = i + 1;
      if (i>questionList.length-1) { I = 0}
  
}

function showStartButton() {

    console.log("showStartButton was called")
    var $gameDiv = $(".game-div")
    var htmlText = "";
    htmlText += '<div class="row">';
    htmlText += '   <div class="col-12-sm">';
    htmlText += '       <button id="start-button">Start</button>';
    htmlText += '   </div>';
    htmlText += '</div>';
    $gameDiv.html(htmlText)
}