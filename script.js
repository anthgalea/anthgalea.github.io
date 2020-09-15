const score = {
  correct: 0,
  wrong: 0,
};


let currentQuestion = 0;

function handleQuestionCheck() {
$("button[class='checkAnswer']").on("click", function () {
  if ($("input:radio[class='correctAnswer']")) {
    $(".correctAnswer").next().addClass("green");
    console.log("correct");
    score.correct += 1;
    //to turn correct answers green
    }

  if ($("input:radio[class='wrongAnswer']")) {
    $(".wrongAnswer").next().addClass("red");
    //to turn wrong answers red
    score.wrong++;
  }
  });

  $("input[class='submitAnswer']").on("click", function () {
    nextQuestion(currentQuestion);
  });
}

//to remove green and red from showing up on all the questions before they're answered
  function nextQuestion() {
    $(`.container${currentQuestion}`).hide();
    currentQuestion++;
    $(".correctAnswer").next().removeClass("green");
    $(".wrongAnswer").next().removeClass("red");
    $(`.container${currentQuestion}`).show();
  }

//hides start container and goes to next question after submit query clicked
  function showStart() {
    $(".startButton").on("click", function (event) {
      $(".startContainer").hide();
      nextQuestion();
    });
  }


  $(document).ready(function () {
    showStart();
    handleQuestionCheck();
    $("form").on("submit", function (e) {
      e.preventDefault();
    });
  });