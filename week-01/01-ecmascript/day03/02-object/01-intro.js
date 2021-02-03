// initial object
const x = {}

// object type
const product = {
    id: 1,
    names : "Laptop Dell",
    price : 1500.00,
    variant :{
        type : "Gamer",
        core : "i7 core"
    }
}

const infoProduct = info => {
    return `Info product : ${info.names}, ${info.price}`
}

console.log(infoProduct(product));

// destructuring object with res parameter
const{id, ...info} = product;
console.log(id);
console.log(info);

const{variant} = product;
console.log(variant);

const{variant: {core}} = product;
console.log(core);