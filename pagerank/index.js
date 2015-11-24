// load math.js
var math = require('mathjs');

// var 1/2 = math.fraction('1/2');
// var 1/3 = math.fraction('1/3');
// var 1/5 = math.fraction('1/5');

var M = math.matrix([
  [0, 1/2, 0, 1/2, 0, 0, 0, 0],
 [1/3, 0, 0, 1/2, 1/5, 0, 0, 0],
 [1/3, 1/2, 0, 0, 1/5, 0, 0, 0],
 [1/3, 0, 1/2, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 1/2, 1/2, 0],
 [0, 0, 0, 0, 1/5, 0, 1/2, 0],
 [0, 0, 1/2, 0, 1/5, 0, 0, 0],
 [0, 0, 0, 0, 1/5, 1/2, 0, 1]]);
// console.log(M);

var V = [1/8, 1/8, 1/8, 1/8, 1/8, 1/8, 1/8, 1/8];

var V_again = math.multiply(M, V);
console.log(V_again);

V_again = math.multiply(M, V_again);
console.log(V_again);

V_again = math.multiply(M, V_again);
console.log(V_again);

V_again = math.multiply(M, V_again);
console.log(V_again);

V_again = math.multiply(M, V_again);
console.log(V_again);

V_again = math.multiply(M, V_again);
console.log(V_again);

V_again = math.multiply(M, V_again);
console.log(V_again);

V_again = math.multiply(M, V_again);
console.log(V_again);

V_again = math.multiply(M, V_again);
console.log(V_again);

console.log('10');
V_again = math.multiply(M, V_again);
console.log(V_again);

console.log('11');
V_again = math.multiply(M, V_again);
console.log(V_again);

console.log('12');
V_again = math.multiply(M, V_again);
console.log(V_again);

console.log('13');
V_again = math.multiply(M, V_again);
console.log(V_again);

console.log('14');
V_again = math.multiply(M, V_again);
console.log(V_again);

console.log('15');
V_again = math.multiply(M, V_again);
console.log(V_again);

console.log('16');
V_again = math.multiply(M, V_again);
console.log(V_again);

var matrix = math.matrix([[7, 1], [-2, 3]]);  // Matrix
var array = [[2, 0], [-1, 3]];                // Array
var array2 = math.multiply(array, matrix);
// console.log(matrix)
// console.log(array)
// console.log(array2)

// functions and constants
math.round(math.e, 3);            // 2.718
math.atan2(3, -3) / math.pi;      // 0.75
math.log(1000, 10);               // 3
math.sqrt(-4);                    // 2i
math.pow([[-1, 2], [3, 1]], 2);   // [[7, 0], [0, 7]]

// expressions
math.eval('12 / (2.3 + 0.7)');    // 4
math.eval('5.08 cm to inch');     // 2 inch
math.eval('sin(45 deg) ^ 2');     // 0.5
math.eval('9 / 3 + 2i');          // 3 + 2i
math.eval('det([-1, 2; 3, 1])');  // -7

