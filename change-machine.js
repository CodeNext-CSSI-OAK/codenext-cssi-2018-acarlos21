// Author: Anthony Carlos
console.log("****************************************************************");
 let readLine = require('readline-sync');
 let cents = readLine.question('HeY BoI Im a caSh regIstEr... GiVe mE An aMOunt to cHaNGe ¿');

 let quarters = Math.floor(cents / 25);
 let a = Math.floor(cents % 25);
 console.log("quarters: " + quarters);
 cents -= quarters * 25;

let dimes = Math.floor(a / 10);
let b = Math.floor(cents % 10);
console.log("dimes: " + dimes);

let nickels = Math.floor(b / 5);
let c = Math.floor(cents % 5);
console.log("dimes: " + dimes);

let pennies = Math.floor(c / 1);
console.log("pennies: " + pennies);
readLine.question('Do yOu WAnt a reCiePt ¿');
console.log('ToO BAd :)');
console.log("****************************************************************");
