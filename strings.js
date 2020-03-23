'hello'

"hello"
 01234 = index

// methods
let a = 'hello'

// find the length
a.length;   // 5

// get the value of the last letter
a[a.length - 1];  // o

// strings are immubtable/can't change
a[0] = 'm'
a; // still equals hello

// need to create a new variable with the word
let b = 'mello'

// uppercase
b.toUpperCase;  // MELLO
b // remains unchanged

// lowercase
let c = 'LOWER';
c.toLowerCase();    // lower
c // remains unchanged


//  trim - removes spaces
let d  = ' to  d a  y  ';
// removes space from the from and back
// leaves space in the middle
d.trim();   // to  d a  y

let f = '  friday  ';
f.trim(); // friday


// finding an occurrence of something

'baseball'.indexOf('ball'); // 4
// finds the first occurrence
'baseball'.indexOf('b'); // 0
// returns neg if not there
'baseball'.indexOf('B'); // -1


// slice up a string
'baseball'.slice(4);    // returns 'ball'
'baseball'.slice(0, 4); // 'base'
'superhero'.slice(5,7);   // 'he'



// replace a string
'baseball is fun'.replace('fun', 'boring'); // baseball is boring
'ha ha ha'.replace('ha', 'hee'); // hee ha ha


