// global scoope 
test = "js fullstack";
console.log(test);

// function scoope 
function scoope(){
    var top = "top";
    console.log(top);
    var bottom = "bottom";
    console.log(bottom)
}

scoope();

function scope2(print){
    var top = "atas";
    if(print){
        var insideIf = "print";
    }
    console.log(insideIf);
}

// scope2(true);

function scope3(print){
    var top = "atas";
    if(print){
        var insideIf = "print";
    }
    console.log(insideIf);
}

// scope3(true);

const x = "hello";
// x = "hello js";
console.log(x);

let y = "js";
y = "hello js";
console.log(y);

y = "js";
console.log(y);

var z = "hello";
var z = "js";
console.log(z);