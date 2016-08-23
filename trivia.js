function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function displayQuestion( question ) {
  console.log(question.text);
  $("#questiontext").text(question.text);
  if (question.image) {
    $('#questionImage').attr("src",question.image);
    $('#questionImage').attr("display","block");
  }
  else {
    $('#questionImage').attr("src","");
    $('#questionImage').attr("display","none");
  }
}

function displayAnswers( question ) {

  var answersArray = shuffle( question.answers );
  var selectors = ["A", "B", "C", "D"];
  var correctAnswer;

  for (var i = 0; i < answersArray.length; i++ ) {
    console.log(selectors[i] + " " + answersArray[i].text);
    // answerChecker[selectors[i]] = answersArray[i];
    if (answersArray[i].correct) {
      correctAnswer = selectors[i];
    }
    $("#" + selectors[i]).text(answersArray[i].text);
  }

/*  var response = prompt("Enter the letter corresponding to your answer");

  if (answerChecker[response].correct) {
    console.log("Correct");
  }
  else {
    console.log("wrong");
  }
  */

  return correctAnswer;
}

function displayResult( choice, correct ) {
  if ( choice == correct) {
    console.log(choice + " is correct");
  }
  else {
    console.log(choice + " is incorrect; the correct answer is " + correct );
  }
}

function updateAll(score,result,question) {
  $("#result").text(result);
  $("#score").text(score);
  displayQuestion( question );
  return displayAnswers( question );
}

function nextQuestion(count) {
  if (count < questions.length) {
    return questions[count];
  }
  else {
    return questions[questions.length - 1];
  }
}

$(document).ready(function(){

  var score = 0;
  var correctAnswer;
  var result;
  var questionCount = 0;

  correctAnswer = updateAll(score,"Welcome!",questions[questionCount++]);
  correctAnswer = displayAnswers( questions[0] );

  $(".answer").on("click", function() {
    var myAnswer = $(this).id
    if (correctAnswer == myAnswer) {
      score += 1;
      result = "Your previous answer was right!";
    }
    else {
      score -= 1;
      result = "Your previous answer was wrong!";
    }
    correctAnswer = updateAll(score,result,nextQuestion(questionCount++));
  })
  // $("#answerA").on("click", function(){
  //   if (correctAnswer == "A") {
  //     score += 1;
  //     result = "Your previous answer was right!";
  //   }
  //   else {
  //     score -= 1;
  //     result = "Your previous answer was wrong!";
  //   }
  //   correctAnswer = updateAll(score,result,nextQuestion(questionCount++));
  // });
  //
  // $("#answerB").on("click", function(){
  //   if (correctAnswer == "B") {
  //     score += 1;
  //     result = "Your previous answer was right!";
  //   }
  //   else {
  //     score -= 1;
  //     result = "Your previous answer was wrong!";
  //   }
  //   correctAnswer = updateAll(score,result,nextQuestion(questionCount++));
  // });
  //
  // $("#answerC").on("click", function(){
  //   if (correctAnswer == "C") {
  //     score += 1;
  //     result = "Your previous answer was right!";
  //   }
  //   else {
  //     score -= 1;
  //     result = "Your previous answer was wrong!";
  //   }
  //   correctAnswer = updateAll(score,result,nextQuestion(questionCount++));
  // });
  //
  // $("#answerD").on("click", function(){
  //   if (correctAnswer == "D") {
  //     score += 1;
  //     result = "Your previous answer was right!";
  //   }
  //   else {
  //     score -= 1;
  //     result = "Your previous answer was wrong!";
  //   }
  //   correctAnswer = updateAll(score,result,nextQuestion(questionCount++));
  // });

})
