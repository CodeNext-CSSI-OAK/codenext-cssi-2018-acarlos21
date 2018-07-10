// Author: Anthony Carlos

let readLine = require('readline-sync');

let ageAsAString = readLine.question('Please enter a year greater that 1582: ');

let y = Number(ageAsAString);



let a = y % 19;
let b = Math.floor(y / 100);
let c = y % 100;
let d = Math.floor(b / 4);
let e = b % 4;
let f = Math.floor((b+8) / 25);
let g = Math.floor((b - f +1) / 3);
let h = Math.floor((19* a + b - d - g + 15) % 30);
let i = Math.floor(c / 4);
let k = Math.floor(c % 4);
let r = Math.floor((32 + 2 * i - h - k) % 7);
let m = Math.floor((a + 11 * h + 22 * r) / 451);
let n = Math.floor((h + r - 7 * m + 114) / 31);
let p = Math.floor((h + r - 7 * m + 114) % 31);
// console.log("Y is " + y);
// console.log("A is " + a);
// console.log("B is " + b);
// console.log("C is " + c);
// console.log("D is " + d);
// console.log("E is " + e);
// console.log("F is " + f);
// console.log("G is " + g);
// console.log("H is " + h);
// console.log("I is " + i);
// console.log("K is " + k);
// console.log("R is " + r);
// console.log("M is " + m);
// console.log("N is " + n);
// console.log("P is " + p);
console.log('In ' + y + ' Easter falls on ' + n + '/' + (p + 1));
