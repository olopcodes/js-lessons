// all of these return a boolean (true/false)

// used with numbers
> // greater than
< // less than
>= // greater than or equl
<=  // less than or equal


// these can be used with numbers and strings
== // equality with coerscion
!= // not equal
=== // strict equality
!==   // strict inequality

7 == '7';   // true
0 == '';    // true
0 == false; // true


3 === '3';  //false
0 === false; //false

1 != '1'; //false
2 !== '2'; // true


// *when comparing values for equality use
===
!==


// ****************************************************

let rating = 4;

// this will only run if rating is > 3
//  if rating less than or equal 3 code will not run
// runs when an expression is true
if (rating > 3){
    console.log('good rating')
}


let newRating = 3;

if (newRating > 3) {
    console.log('good rating')
} else if (newRating){
    // this will run if the first if is false
    console.log('average')
}


let thisRating = 1;

if (thisRating > 3) {
    console.log('good rating');
} else if (thisRating){
    // this will run if the first if is false
    console.log('average');
} else {
    // if all the above fails run this
    console.log('failing');
}


// nested conditionals

let password = 'mypass1';

if (password >= 7) {
    // check for spaces
    if(password.indexOf(' ') === -1){
        console.log('valid password')
    } else {
        console.log('password should not contain spaces')
    }
} else {
    console.log('password needs to be longer')
}


// And operator
// every condition needs to be true for code to run
let age = 30;
let salary = 50000;
if (age > 25 && salary < 90000) {
    console.log('switch careers')
}

let num = 5;
if (num >= 1 && num <= 10) {
    console.log(`hey ${num}times!`)
} else {
    console.log('bye')
}

// checking a password
let newPassword = 'software';
if (newPassword.length >= 6 && newPassword.indexOf(' ') === -1){
    console.log('valid password')
} else {
    console.log('invalid password')
}



//  Or only one of these conditions needs to be true to run
let freeAge = 50;
if(freeAge <=8 || freeAge >= 63) {
    // code doesn't run because false for both
    console.log('free ride')
}

let freeAge1 = 2;
if(freeAge1 <=8 || freeAge1 >= 63) {
    // code runs because first one is true
    console.log('free ride')
}


// !not changes from truthy to falsy and falsy to truthy
// if there isn't a logged in
let loggedIn;
if(!loggedIn) {
    console.log('get out')
}

let flavor = 'cherry'
if(flavor !== 'grape' && flavor !== 'orange') {
    console.log('we do not have that')
}


// ternary operator
// condition ? true : false
let status = offline;
let color = status === offline ? red : green;
color;  // red 