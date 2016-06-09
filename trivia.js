

function displayQuestion( question ) {
  console.log(question.text);
  $("#questiontext").text(question.text);
}

function displayAnswers( question ) {

  var answersArray = question.answers;
  var selectors = ["A", "B", "C", "D"];
  var correctAnswer;

  for (var i = 0; i < answersArray.length; i++ ) {
    console.log(selectors[i] + " " + answersArray[i].text);
    // answerChecker[selectors[i]] = answersArray[i];
    if (answersArray[i].correct) {
      correctAnswer = selectors[i];
    }
    $("#answer" + selectors[i]).text(answersArray[i].text);
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


$(document).ready(function(){

  displayQuestion( questions[0] );
  var correctAnswer = displayAnswers( questions[0] );

  $("#answerA").on("click", function(){
    displayResult("A", correctAnswer );
  });

  $("#answerB").on("click", function(){
    displayResult("B", correctAnswer );
  });

  $("#answerC").on("click", function(){
    displayResult("C", correctAnswer );
  });

  $("#answerD").on("click", function(){
    displayResult("D", correctAnswer );
  });

/*  $("#answerA").on("click", checkAnswer('A'));
  $("#answerB").on("click", checkAnswer('B'));
  $("#answerC").on("click", checkAnswer('C'));
  $("#answerD").on("click", checkAnswer('D'));
*/

/*  // checking deposit
  $("#checkingdeposit").on("click", function(){
    var cdeposit = parseInt($("#checkinginput").val());
    var cbalance = parseInt($("#checkingbalance").text().replace("$", ""));
    var cnewBalance = deposit(cbalance,cdeposit);
    $("#checkingbalance").text("$" + cnewBalance);
  })

  // checking withdrawal /w overdraft protection
  $("#checkingwithdrawal").on("click", function(){
    var withdraw = parseInt($("#checkinginput").val());
    var checkingBalance = parseInt($("#checkingbalance").text().replace("$", ""));
    var savingsBalance = parseInt($("#savingsbalance").text().replace("$", ""));
    [checkingBalance,savingsBalance] =
      overdraftWithdrawal(checkingBalance, withdraw, savingsBalance);
    $("#checkingbalance").text("$" + checkingBalance);
    $("#savingsbalance").text("$" + savingsBalance);
  })
  // savings deposit
  $("#savingsdeposit").on("click", function(){
    var sdeposit = parseInt($("#savingsinput").val());
    var sbalance = parseInt($("#savingsbalance").text().replace("$", ""));
    var snewBalance = deposit(sbalance,sdeposit);
    $("#savingsbalance").text("$" + snewBalance);
  })

  // savings withdraw with overdraft protection
  $("#savingswithdrawal").on("click", function(){
    var withdraw = parseInt($("#savingsinput").val());
    var checkingBalance = parseInt($("#checkingbalance").text().replace("$", ""));
    var savingsBalance = parseInt($("#savingsbalance").text().replace("$", ""));
    [savingsBalance,checkingBalance] =
      overdraftWithdrawal(savingsBalance, withdraw, checkingBalance);
    $("#checkingbalance").text("$" + checkingBalance);
    $("#savingsbalance").text("$" + savingsBalance);
  }) */
})
