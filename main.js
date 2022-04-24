// build a calculator 

//How it works
//Awaits an event (button click)
//button clicks append to result until operand is selected (this includes decimal)
//operand is selected
//New number selected is appended until a new operand or equals is selected, updating the result.

//Functions
//Operand
//append
//update result
//clear result
//convert number from string to integer

//Properties 




//Add a number to the result
let result = document.getElementById('result');
let result2 = "";
//function to be executed upon the click
function displayOne(){
    result.innerText += "1";
}
function displayTwo(){
    result.innerText += "2";
}
function displayThree(){
    result.innerText += "3";
}
function displayFour(){
    result.innerText += "4";
}
function displayFive(){
    result.innerText += "5";
}
function displaySix(){
    result.innerText += "6";
}
function displaySeven(){
    result.innerText += "7";
}
function displayEight(){
    result.innerText += "8";
}
function displayNine(){
    result.innerText += "9";
}
function displayZero(){
    result.innerText += "0";
}
function clearResults(){
    result.innerText="";
}
function addition(){
    Number(result.innerText);

    Number(results.innerText)*Number(result2);
}
function subtraction(){

}
function multiply(){

}
function division(){

}


