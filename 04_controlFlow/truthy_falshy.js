

// node 04_controlFlow/truthy_falshy.js

const userEmail = "ritik@123"

if(userEmail){
    console.log("Got user email")
}else{
    console.log("email nahi hai")
}


/*
************falsy value*****

false , 0 , -0 , 0n , "" , null , undefined, NaN

*******************truthy value*****************

true , 1 , "0" , 'false' , " " , [] , {} , function(){} , 

*/


// check if array is empty

// if (userEmail.length === 0){
//     console.log("array is empty")
// }

// check if object is empty

// const obj1 = {}
// if(Object.keys(obj1).length === 0){
//     console.log("object is empty")
// }


// nullishing coalescing oprators (??) : null , unfedined

let val1;
val1 = null ?? 5;
console.log(val1)

let val2 ;
val2 = undefined ?? 23;
console.log(val2)

let val3;
val3 = 12 ?? 16
console.log(val3)


// ternery oprator

// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice>=80 ? console.log("greater then 80") : console.log("else statement")