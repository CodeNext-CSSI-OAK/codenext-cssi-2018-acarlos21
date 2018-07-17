let readline = require("readline-sync");


// let correctPassword = "badabing";
// let input = "";
// let tries = 3;
// while(input !== correctPassword && tries > 0) {
//   input = readline.question("Please enter the correct password: ");
//   tries--
// }
//
// if(tries === 0){
//   console.log("Nah fam... get outttt");
// }else{
// console.log("Correct!");
// }

// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for( let i = 0; i < alphabet.length; i++) {
//   console.log(alphabet.charAt(i));
// }


// for(let count = 0; count <= 11111111111111; count++) {
//   console.log(count);
// }

// let students = "MFAD";
// for(let i = 0; i < students.length; i++) {
//   console.log("Give" + students.charAt(i) + "a cookie.");
// }
//
// let i = 0;
// while(i < students.length) {
//   console.log("Give" + students.charAt(i) + "a cookie.");
//   i++;
// }
//
// let correctPassword ="Hamzah";
// for(let input = ""; correctPassword !== input;) {
//   input = readline.question("Enter the password: ");
// }
// given a string of any length, return true if it has a space
// function containSpace(str) {
//   for(let i = 0; i < str.length; i++) {
//     if(str.charAt(i) === " "){
//       return true;
//     }
//   }
//   return false;
// }
//
// console.log(containSpace("star wars"));
// console.log(containSpace("starwars"));
// console.log(containSpace(""));
// console.log(containSpace("        "));


//Given a string of any length, return the total number of times "a" or "A" appears.
//Hint: Declare a variable called count and initialize it to 0 before the for loop.
//When you find an "a" or an "A", increment count. Below the for loop, simply return count.

//
// function countAs(str) {
//   let count = 0;
//   for(let i = 0; i < str.length; i++) {
//     if(str.charAt(i) === "a" || str.charAt(i) === "A") {
//     count++;
//     }
//   }
//   return count;
// }
//
// console.log(countAs("Happy"));
// console.log(countAs("lady gaga"));
// console.log(countAs(""));

function reverseString(str) {
  let reversed = "";
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

console.log(reverseString("banana"));
console.log(reverseString("A man, a plan, a canal: Panama!"));
console.log(reverseString("cat cit"));
