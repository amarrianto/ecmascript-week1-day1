var array = [3, 4, 5, 6];
    
var sum = array.reduce(function(a, b){
    return a + b;
}, 0);

console.log(sum);