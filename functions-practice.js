// function makeSandwich(){
//   console.log('this is my function');
// }
// makeSandwich();
//
// let readline = require("readline-sync");
//
// function doTheThing() {
//   let theThing = readline.question("What do you want me to do?: ");
//   if (theThing === "eat") {
//     console.log("Computers can't eat!");
//   } else {
//     console.log("I'm sorry, I don't understand you!");
//   }
// }
//
// doTheThing()

// function subtract(num1,num2){
//   return num1 - num2;
// }
// let result = subtract(6,4);
// console.log('The result is: '+ result)
//
// subtract(6, subtract(100,99));

function absoluteDifference(num1, num2){
  if(num2 > num1){
    return num2 - num1;
  }
  return num1 - num2;
}

console.log(absoluteDifference(6,4));
console.log(absoluteDifference(4,6));
