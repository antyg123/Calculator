// Calculator 

//How it works:
//The display is an empty cell
//Each button has it's own function upon click
//The function adds the value of the button to the display 
//When '=' is pressed, the string is evaluated and displayed
//

//Functions
//Operand
//append
//update result
//clear input
//convert number from string to integer

//Properties 




//Add a number to the result
let input = document.getElementById('input');


//function to be executed upon the click
function displayOne(){
    input.innerText += "1";
}
function displayTwo(){
    input.innerText += "2";
}
function displayThree(){
    input.innerText += "3";
}
function displayFour(){
    input.innerText += "4";
}
function displayFive(){
    input.innerText += "5";
}
function displaySix(){
    input.innerText += "6";
}
function displaySeven(){
    input.innerText += "7";
}
function displayEight(){
    input.innerText += "8";
}
function displayNine(){
    input.innerText += "9";
}
function displayZero(){
    input.innerText += "0";
}
function clearResults(){
    input.innerText="";
}
function addition(){
    input.innerText += "+" 
}
function subtraction(){
    input.innerText += "-"
}
function multiply(){
    input.innerText += "*"
}
function division(){
    input.innerText += "/"
}
function decimal(){
    input.innerText +="."
}
function solve(){
    let result = eval(input.innerText);
    input.innerText= result;
}

