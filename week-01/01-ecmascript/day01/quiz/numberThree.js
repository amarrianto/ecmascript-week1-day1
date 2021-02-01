z = 0
const howManyFrogJump = (x,y,k) =>{
    if(x<y && x+k <=y){
        z++;
    }
    while ( x + K < y){
        x += k
        console.log(x);
        z++
    }
    return z
}
console.log(howManyFrogJump(10,85,30))