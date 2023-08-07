// alert('Hey friends');
console.log('hello');

// alert('hey this is Tyrell');
// How to write a comment

// Variables
let b = 'smoothie'
console.log(b)

let number = 30;
console.log(number);

// Manipulation DOM with Javascript
/* ... It's  just a Fancy way of saying
change HTML with Javascripts*/


let code = prompt('What is the 4 digit code?');
if (code == 4553) {
    alert('Go to IDEAS')
}

// document.getElementById('SomeText').innerHTML = age;

// Numbers in Javascript
let num1 = 10;

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
    let result = 'Hello ' + yourName+ ' would you like a smoothie?'; // str concatenation
    console.log(result)
}

// let name = prompt('What is your name?');
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
let moreFruits = 'banana\napple'; // \n means new line
console.log(fruit.length);
console.log(moreFruits);
console.log(fruit.slice(2,4));
console.log(fruit.replace());
console.log(fruit.indexOf());
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt());
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by characters
console.log("Tyrell's Works = Home")

// Array
let fruits = ['banana', 'apple', 'grapes', 'watermelon']; // call a let function with alert

fruits = new Array('banana', 'apple', 'grapes', 'watermelon');




