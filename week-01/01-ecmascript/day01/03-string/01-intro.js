var s = "code".charAt(2);
console.log(s);

var s = "codeId".substr(2,3);
console.log(s);

// compare ad & b 
var a = "add";
var b = "b";
console.log(a < b );

// compare ad & ab 
var a = "add";
var b = "ab";
console.log(a < b);

// index of, return posisi index yang dicari
console.log("code ecma".indexOf("code")); //return 0
console.log("code ecma".indexOf("ecma")); //return 5

// decomposition 
var s = "java, javascript, python";
console.log(s.split(","));

var s = "codeecma";
console.log(s.split(""));

// function replace 
var s = "hello world".replace("world","js");
console.log(s); //return hello js