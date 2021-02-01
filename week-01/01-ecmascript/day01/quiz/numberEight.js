let z = ''
const deretNegation = (k) => {
    for (let i = 1; i <= k; i++) {
        for(let j = 1; j <= i; j++){
            z+=1
        }
        
        if(i!==k) {
            z+=' ,'
        }
    }
    return z;
}
console.log(deretNegation(5));