
// node 05_itrators/07.js

// ++++++++++ Map () function ++++++++++++++
const myNums = [1, 2, 3, 4, 5, 67, 8, 9, 10, 11, 12];

// const newNUmbs = myNums.map((item) => item+10 )
// console.log(newNUmbs);


// ******chaining in functions;;
const newNumbs = myNums
    .map((item) => item * 10)
    .map((item) => item * 10)
    .filter((item) => item>=500)


console.log(newNumbs);