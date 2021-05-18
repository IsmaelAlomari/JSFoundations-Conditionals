const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
//const name = prompt("What's your name? ");
//console.log(`Hi, I'm ${name}.`);

let num1 = prompt("enter first num1");
let num2 = prompt ("enter second num2");
 
 let opreatr  = prompt ("Please choose the operation (+, -, /, *)")

num1 = parseInt ("num1")
 num2 = parseInt ("num2")

if (opreatr === "+") {
    console.log (num1 + num2)
}
 else if (opreatr === "-") {
     console.log (num1 - num2)
 }
 else if ( opreatr === "*") {
     console.log (num1 * num2) 
 }

 else if(opreatr === "/") {
     console.log ( num1 /num2)
 }
