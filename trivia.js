// AM: No issue with grabbing this from StackOverflow. There are a number of trusted JS shuffle methods out there that you are welcome to use. Good that you put effort into understanding it.
function shuffle(array) { // Randomizes the order of items in an array. I admit to copying this directly from
                          // stackoverflow. I do understand that it goes through the array and swaps each element
                          // with a randomly selected entry that has not been randomized yet.
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

function displayQuestion( question ) { // Display a question on the page
  console.log(question.text);
  $("#questiontext").text(question.text); // Put the question text on the page. There's no validation that there's anything
                                          // in question.text, or that question.text is even there. There probably should be.
  if (question.image) { // If an image is provided for the question, display it. Again, no validation, but should be.
    $('#questionImage').attr("src",question.image);
    // AM: If you're going to modify the display property of an element, it's best to do this using `.css()`. It's usually not good practice to define CSS using HTML attributes.
    $('#questionImage').attr("display","block"); // Toggle display of image. I'm not sure if this is the best way to toggle
                                                 // an image on and off, but it works well enough.
  }
  else {
    // AM: This works. jQuery also has a `.toggle` method which you should check out. See if that replaces both `.attr` statements you have below.
    $('#questionImage').attr("src",""); // Would this be enough by itself to toggle the image to off?
    $('#questionImage').attr("display","none"); // Toggle display of image. I'm not sure if this is the best way to toggle
                                                 // an image on and off, but it works well enough.
  }
}

// AM: +1
function displayAnswers( question ) { // Display the possible answers for the question

  var answersArray = shuffle( question.answers ); // Randdomly sort the list of answers.
  var selectors = ["A", "B", "C", "D"]; // This is a holdover from when I was going to display letters in front
                                        // of each question. This can be refactored out easily.
  var correctAnswer;

  for (var i = 0; i < answersArray.length; i++ ) { // Go through each question
    console.log(selectors[i] + " " + answersArray[i].text);

    if (answersArray[i].correct) { // Remember the correct answer. Needs checking for no correct, or more one than one.
      correctAnswer = selectors[i];
    }
    $("#answer" + selectors[i]).text(answersArray[i].text); // Update the display
  }

  return correctAnswer;
}

// AM: Kudos on separating everything into functions. Really helps code readability.
function displayResult( choice, correct ) {
  if ( choice == correct) {
    console.log(choice + " is correct");
  }
  else {
    console.log(choice + " is incorrect; the correct answer is " + correct );
  }
}

function updateAll(score,result,question) { // Wrapper function to update the entire display
  $("#result").text(result);
  $("#score").text(score);
  displayQuestion( question );
  var value = question.value;
  var answer = displayAnswers( question );
  return [value, answer];
}

function nextQuestion(count) { // If he had hundreds of questions, we'd just randomly select one,
                               // perhaps with something to prohibit "re-runs". With a short list
                               // of questions, just repeat the final question forever once it's
                               // reached.
  if (count < questions.length) {
    return questions[count];
  }
  else {
    return questions[questions.length - 1];
  }
}

// AM: Why is the above code not inside document.ready? Theoretically, the DOM elements you reference above might not be loaded by the time the Javascript code that references them is processed.
$(document).ready(function(){

  var score = 0;
  var correctAnswer;
  var result;
  var questionCount = 0;

  [value, correctAnswer] = updateAll(score,"Welcome!",questions[questionCount++]);

  $("#answerA").on("click", function(){ // Create listeners for each button.
                                        // THere HAS to be a DRY-er way to do this.
    if (correctAnswer == "A") {
      score += value;
      result = "Your previous answer was right!";
    }
    else {
      score -= 1;
      if (score < 0) { // Don't let score go below zero, don't embarrass the user.
        score = 0;
      }
      result = "Your previous answer was wrong!";
    }
    [value, correctAnswer] = updateAll(score,result,nextQuestion(questionCount++));
  });

  $("#answerB").on("click", function(){
    if (correctAnswer == "B") {
      score += value;
      result = "Your previous answer was right!";
    }
    else {
      score -= value;
      if (score < 0) { // Don't let score go below zero, don't embarrass the user.
        score = 0;
      }
      result = "Your previous answer was wrong!";
    }
    [value, correctAnswer] = updateAll(score,result,nextQuestion(questionCount++));
  });

  $("#answerC").on("click", function(){
    if (correctAnswer == "C") {
      score += value;
      result = "Your previous answer was right!";
    }
    else {
      score -= 1;
      if (score < 0) { // Don't let score go below zero, don't embarrass the user.
        score = 0;
      }
      result = "Your previous answer was wrong!";
    }
    [value, correctAnswer] = updateAll(score,result,nextQuestion(questionCount++));
  });

  // AM: These four event listeners look pretty similar. I'm wondering if you could create a single event listener for your <li>'s.
  // AM: Inside the event listener you could then call a function that looks something like `checkAnswer(correctAnswer)` and you could use `$(this)` to extract information about what exactly was clicked.
  // AM: You could then store information about what was clicked as an HTML attribute, like `data-answer="B"`.
  // AM: Happy to talk about this more in person.
  $("#answerD").on("click", function(){
    if (correctAnswer == "D") {
      score += value;
      result = "Your previous answer was right!";
    }
    else {
      score -= 1;
      if (score < 0) { // Don't let score go below zero, don't embarrass the user.
        score = 0;
      }
      result = "Your previous answer was wrong!";
    }
    [value, correctAnswer] = updateAll(score,result,nextQuestion(questionCount++));
  });

})

// AM: I think this is what's supposed to happen, but the game doesn't go on beyond the last "Boom" question.
