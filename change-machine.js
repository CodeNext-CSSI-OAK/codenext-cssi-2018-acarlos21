// Author: Anthony Carlos
console.log("******************************************************");
 let readLine = require('readline-sync');
 let cents = readLine.question('Hey Im a cash register... Give me an amount to change!');

 let quarters = Math.floor(cents / 25);
 let a = Math.floor(cents % 25);
 console.log("quarters: " + quarters)

let dimes = Math.floor(a / 10);
let b = Math.floor(cents % 10);
console.log("dimes: " + dimes);

let nickels = Math.floor(b / 5);
let c = Math.floor(cents % 5);
console.log("dimes: " + dimes);

let pennies = Math.floor(c / 1);
console.log("pennies: " + pennies);
console.log("******************************************************");
