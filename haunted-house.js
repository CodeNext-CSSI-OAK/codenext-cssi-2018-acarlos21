// Author: FirstName LastName
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                     A game by Anthony Carlos");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");

let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  console.log("You walk into the quiet house with a fear of getting a jump scare from something like a ghost");
} else {
  console.log("You are clearly too courious to walk away, so you go to see what is going on in the house");
}

//-----------

let mainHallway = readline.question("You see stairs and you see a door at the end of the hall. Where do you go?(stairs or hall?)");
if(mainHallway == "stairs"){
  console.log("You go us the stairs and you think you see something.");


}else if(mainHallway == "hall"){
  console.log("The door that you went into was the door to the living room. You see a body on the floor.");
}
//-----------

if(mainHallway =="stairs"){
  let upstairs = readline.question("Will you go investigate or avoid it?(investigate or avoid?)");
  if(mainHallway == "stairs" && upstairs == "investigate"){
    console.log("That thing that you saw was a man with a bloody shirt. He murders you.");
    console.log("Thanks for playing!");
  } else {
    console.log("Your mom calls asking where you are so you go home and never come back that house ever agian.");
    console.log("Thanks for playing!");
  }
}

//----------

if(mainHallway =="hall"){
  let livingRoom = readline.question("What do you do?(call the cops or not say anything?)");
  if(mainHallway == "hall" && livingRoom == "call the cops"){
    console.log("The police come and search the house and find that the murderer was upstairs. You helped put a guity man behind bars");
    console.log("Thanks for playing!");
  } else if(mainHallway == "hall" && livingRoom == "not say anything"){
    console.log("It has been a week since the death and the cops tested the house just to find your fingerprints on the door and in the house. You spend life in prison.");
    console.log("Moral of the story is that you shouldn't touch anything");
    console.log("Thanks for playing!");
  }
}
