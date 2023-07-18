console.log('hello');

// alert('hey this is Tyrell');
// How to write a comment

// Variables
var b = 'smoothie'
console.log(b)

var number = 30;
// console.log(number);

// Manipulation DOM with Javascript
/* ... It's  just a Fancy way of saying
change HTML with Javascripts*/


// var age = prompt('What is your age?');

// document.getElementById('SomeText').innerHTML = age;

// Numbers in Javascript
var num1 = 10;

// Increase num1 by 1
num1++;

// Decrease num1 by 1
num1--;
console.log(num1);

// Divide /, multiply *, remainder %
console.log(num1 % 6);

// Increase, Decrease, by any number
num1 += 10;
console.log(num1);

/*Functions
1. Create function
2. Call function
*/
function fun() {
    console.log('This is a function')
}

fun();

/* Let's create a function that takes in a name and 
says hello "name"

For example

Name: Tyrell
Return: Hello Tyrell
*/


function greeting(yourName) {
    var result = 'Hello ' + yourName+ ' would you like a smoothie?'; // str concatenation
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);


// how do arguments work in a function?
// how to add 2 numbers together with a function

function sumNums(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

sumNums(10, 10);

// While loops

/*var num = 0;

while (num < 100){
    num += 1;
    console.log(num); // counts from 1 to 100
}*/

// For loop
for (let num = 1; num <= 100; num++) {
    console.log(num)
}

// Data types
let yourAge = 19; // number
let yourName = 'Tyrell'; // str
let name = {first: 'Tyrell', last: 'Liddell'}; // object and dictionary
let truth = false; // bool
let groceries = ['apples', 'pears', 'strawberries', 'mushrooms']; // array
let random; // undefined
let nothing = null; // value null

// strings in Javascript common methods
let fruit = 'banana';
let moreFruits = 'banana\apple';
console.log(moreFruits);