
// node 05_itrators/09.js

// *******Reduce method() ****************

const myNumbs = [1,2,3,4,5];

// const myTotal = myNumbs.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal}`)
//     return acc + currVal;
// }, 0)
// console.log(myTotal)

const myTotal = myNumbs.reduce((acc , currVal) => (acc+currVal), 0)
console.log(myTotal)


// eg:

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 2999
    },
    {
        itemName : "js course",
        price: 1499
    },
    {
        itemName : "c++ course",
        price: 1992
    },
    {
        itemName : "React course",
        price: 4001
    },
    
]

const totalPrice = shoppingCart.reduce((acc , item) => (acc + item.price) , 0)
console.log(totalPrice)