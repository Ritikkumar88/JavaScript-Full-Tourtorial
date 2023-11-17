
// node 03_basics/03_arrowFn.js

const user = {
    username : "Ritik",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username} , welcome to Our Website`)
        console.log(this)
    }


}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this)

// ----------------meth -1


// function chai(){
//     let username = "rahul"
//     console.log(this.username);
// }

// chai()

// -------meth -2

// const chai = function(){
//     let username = "abc"
//     console.log(this.username)
// }

// chai()


// const chai = () => {
//     let username = "abc"
//     console.log(this.username)
// }

// chai()



// ++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++

// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addtwo(3,4))


// arrow function with implicit return;**********
const addtwo = (num1 , num2) =>  (num1 + num2)
console.log(addtwo(3,4))

// const addtwo = (num1 , num2) =>  num1 + num2
// console.log(addtwo(3,4))