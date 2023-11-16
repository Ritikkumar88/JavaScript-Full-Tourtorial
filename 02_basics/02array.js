// node 02_basics/02array.js


const heros1 = ["Virat" , "ranveer alahabadiya"]
const heros2 = ["Rohit" , "Raj shamani"]

// heros1.push(heros2)
// console.log(heros1)

// const ab = heros1.concat(heros2);
// console.log(ab);

const Hreoes3 = [...heros1, ...heros2]
console.log(Hreoes3)

const array6 = [1,2,3,4,5, [6,7,8,9] , 10, [11,12,13 , [4,55,69]]]

const array7 = array6.flat(Infinity);
console.log(array7)