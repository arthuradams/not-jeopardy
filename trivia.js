

function displayQuestion( question ) {
  console.log(question.text);
}

function displayAnswers( question ) {

  var answersArray = question.answers;
  var selectors = ["A", "B", "C", "D"];
  var answerChecker = [];

  for (var i = 0; i < answersArray.length; i++ ) {
    console.log(selectors[i] + " " + answersArray[i].text);
    answerChecker[selectors[i]] = answersArray[i];
  }

}


$(document).ready(function(){
  // checking deposit
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
  })
})
