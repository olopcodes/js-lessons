// addition
9 + 8 = 17
'9' + 8 = 98
'6' + '7' = 67

// subtraction
3 - 9 = -6
4 - 2 = 2
'8' - 3 = 5

// multiply
9 * 6 = 54
'3' * 7 = 21

// division
33 / 3 = 11
'8' / 2 = 4

// exponent
2 ** 5 = 32

// modulo , gives remainder
5 % 2 = 1 
12 / 6 = 0



// Methods

// -typeof x
let a = 9;
typeof a; // number

let str = 'hey';
typeof str; // string

// -toFixed
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000


// converting things to numbers
Number('10');   // 10
Number(true);   // 1
Number('10.33');    // 10.33
Number(10 33); // NaN


// parseInt() parses a string and returns a whole number. 
//  Spaces are allowed. Only the first number is returned
 
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 


// parseFloat() parses a string and returns a number. 
// Spaces are allowed. 
// Only the first number is returned:

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN