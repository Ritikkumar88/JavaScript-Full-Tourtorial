

// node 02_basics/01arrays.js

// +++++++++++++++++++++++++++ arrays +++++++++++++++++++++++++++

const myarr = [1,2,3,4,5,67,8,9,10]
console.log(myarr[3] = 9)
console.log(myarr)

const myHeroes = ["virat" , "Ranveer"]

const myarr2 = new Array(1,2,3,4,5,6,7);

// +++array methods++++++++++
console.log(myarr2)

myarr2.push(25)
console.log(myarr2)

myarr2.push(225)
console.log(myarr2)
myarr2.pop()
console.log(myarr2)


myarr2.unshift(10001)
console.log(myarr2)

myarr2.shift()
console.log(myarr2)

console.log(myarr2.includes(9))
console.log(myarr2.indexOf(6))


const newarr = myarr2.join()
console.log(newarr)
console.log(myarr2)


// slice and splice

console.log("A " , myarr2);
const myarr3 = myarr2.slice(1,3);
console.log(myarr3)
console.log("b ", myarr2)

console.log("A " , myarr2);
const myarr4 = myarr2.splice(1,3);
console.log(myarr3)
console.log("b ", myarr2)




