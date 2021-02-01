function whoAmI(value){
    if(typeof value === "number"){
        return "you are number"
    } else if(typeof value === "string"){
        return "you are string";
    }else{
        return"undefinned";
    }
}

console.log(whoAmI(45));
console.log(whoAmI());
console.log(whoAmI("Hello"));
console.log(whoAmI(true));