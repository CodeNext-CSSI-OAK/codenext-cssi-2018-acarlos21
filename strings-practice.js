// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
//
// Examples:
// makeAbba("Hi", "Bye") → "HiByeByeHi"
// makeAbba("Yo", "Alice") → "YoAliceAliceYo"
// makeAbba("What", "Up") → "WhatUpUpWhat"

function makeAbba(a, b) {
  return a + b + b + a;
}


console.log(makeAbba("hey","yo"));

function comboString(a,b){
  if(a.length > b.length ){
    return b + a + b;
  }else{
    return a + b + a;
  }
}
console.log(comboString("yes", "no"));

function lastTwo(str){
  if(str.length >= 2){
    let lastChar = str.charAt(str.length -1);
    let secondLastChar = str.charAt(str.length -2);
    let firstPart = str.substring(0 , str.length -2);
    return firstPart + lastchar + secondLastChar;
  }
  return str;
}

console.log(x);
let x = 3;
