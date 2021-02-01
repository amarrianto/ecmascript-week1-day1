// problem with number function 
var a = 0.1 + 0.2 === 0.3;
console.log(a);

// solution 1 use Math.round 
var a = (Math.round(0.4) + Math.round(0.2)) === Math.round(0.3);
console.log(a);

Math.floor(1.1) //return 1
Math.ceil(0.9) //return 1
Math.ceil(21.01) //return 22

var x = Math.random() * 100; //float between 0-100;
console.log(x);

var y = Math.round((Math.random() * 25));
console.log(y);