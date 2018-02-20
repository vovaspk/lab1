var readLineSync = require("readline-sync");

while (true){
var guessNumber = Math.floor(Math.random() * (9999-1000)) + 1000;
var guessNumberStr = String(guessNumber);
var k = 0;
for (var i = 0; i <= 3; i++) {
  for (var j = 0; j <= 3; j++) {
    if (guessNumberStr[i] == guessNumberStr[j] && i !=j)  {
      k=1
    }
  }
}
if (k == 0){
  break
}
}

while (true){
  var bulls = 0;
  var cows = 0;
  var userInput = readLineSync.question("Enter Your number: ");
  if (userInput.length > 4 ) {
    console.log("Enter a correct number");
    break;  
  }
  for (var i = 0; i <= 3; i++) {
      for (var j = 0; j <= 3; j++) {
        if (userInput[i] == guessNumberStr[j]){
          if (i == j){
            bulls++;

          }
          else{
            cows++;;
          }
        }
      }
  }
  if (bulls == 4){
    console.log('You Win!!! ');
    console.log("CONGRATULATIONS");
    break;
  }
  else{
    console.log('Bulls: ' + bulls);
    console.log('Cows: ' + cows);
    console.log('Try another number');
  }

}