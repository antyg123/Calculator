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




var operator;
var number;
var decimal;
var clear;
let result = '';

function solve();
function display(val);{
    document.getElementById('result').value += val;
    return val;
}
function clear();