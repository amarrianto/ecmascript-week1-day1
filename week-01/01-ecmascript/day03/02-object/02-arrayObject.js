const listProduct = [
    {
        id: 1,
        names : "Laptop Dell",
        price : 1500.00,
        variant :{
            type : "Gamer",
            core : "i7 core"
        },
        id: 2,
        names : "Laptop Bell",
        price : 2000.00,
        variant :{
            type : "Gamer",
            core : "i9 core"
        },
        id: 3,
        names : "Laptop Sell",
        price : 1700.00,
        variant :{
            type : "Gamer",
            core : "i8 core"
        },
    }
];

const filterProductByPrice = (products, id) => {
    return products.filter(x => x.id === id);
}

let result = filterProductByPrice(listProduct,2);

console.log(result);