
// function need (x){
//     console.log(`this is what you have passed in function ${x}`)
// }

// need(400);
// need(700);
// need(700);
// need(500);

// node 03_basics/01_functions.js


// +++++++++++++++++++++ Function ++++++++++++++++++++++++++


// function add2Num (num1 , num2){
//     console.log(num1+num2)   ... > console.log dost meand return in function;
// }


function add2Num(num1, num2) {
    let result = num1 + num2;
    return result;
}

console.log(add2Num(2, 856))


// summission in shopping cart ******************

function calculateCatrPrice(...num1) {
    return num1
}

// console.log(calculateCatrPrice(45 , 600 , 785))


// ***********passing object in a function;
const user = {
    username: "Ritik",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);


// ************** using arrays in a function;

const myarr = [200, 400, 100, 600];

function returnSecval(anyarr) {
    return anyarr[2];
}

console.log(returnSecval(myarr));




