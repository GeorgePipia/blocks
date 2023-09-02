// create 3 variables
// assign the calculated values to each variable 
// asign the string to another variable, or just use concatination in "alert"log

//devide a number to get 10 and asign it to a variable a
let a = 50 / 5;

//adding two numbers get 40 and asign to a variable b
let b = 20 + 20;

//deduction to get 39 and asign to a variable c
let c = 43 - 4;

 // Get a reference to the button element
 var button = document.getElementById("myButton");

 // Add a mouseover event listener to the button and alert with String
 button.addEventListener("mouseover", function() {
    alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination: "
    + a + " - " + b + " - " + c);
 });

