const prompt=require("prompt-sync")({sigint:true}); 

let userInput1 = +prompt("Enter the first number: ");
let matheOperatorInput = prompt("Enter an operator: ") ;
let userInput3 = prompt("Enter the second number: ") 
  
// userInput3 is not converted to a number (let userInput3 = prompt("Enter the second number: ") should be Number(prompt(...))).

switch(matheOperatorInput){
  case '+' : 
    console.log(userInput1  +  userInput3);
    break;
  case '-':
    console.log(userInput1  -  userInput3);
    break;

  case '*' :
    console.log(userInput1 *  userInput3);
    break;
  case '/' : 
   if(userInput3 != 0){
    console.log(userInput1  /  userInput3) 
   }   
   break;
   default : 
   console.log("Invalid operator")
};
