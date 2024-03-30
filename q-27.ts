/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//Variables
let Aliencolor = "green";

//Version no 1
//Using If and Else-IF statements
if (Aliencolor === "green"){
    console.log("You shot down green alien so you have earned 5 points.");
}
else if(Aliencolor === "yellow"){
    console.log("You shot down yellow alien so you have earned 10 points");
}
else if(Aliencolor === "red"){
    console.log("You shot down red alien so you have earned 15 points");
}

//version no 2

let aliencolor2 = "yellow";

if(aliencolor2 === "green"){
    console.log("You shot down green alien so you have earned 5 points");
}
else if(aliencolor2 === "yellow"){
    console.log("You shot down yellow alien so you have earned 10 points");
}
else if(aliencolor2 === "red"){
    console.log("You shot down rede alien so you have earned 15 points");
}

//Version no 03

let aliencolor3 = "red";

if(aliencolor3 === "green"){
    console.log("You shot down the green alien so you have earned 5 points");
}
else if(aliencolor3 === "yellow"){
    console.log("You shot down the yellow alien so you have earned 10 points");
}
else if(aliencolor3 === "red"){
    console.log("you shot down the red alien so you have earned 15 points");
}