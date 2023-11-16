
// node 01_basics/07datesInJS.js

// +++++++++++Date++++++++++++++++++++

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(typeof mydate)

// let MyCreatedDate = new Date(2023 , 0, 23);
// let MyCreatedDate = new Date(2023 , 0, 23, 5,3);
let MyCreatedDate = new Date("2023-01-14");
console.log(MyCreatedDate.toLocaleString())


let myTimeStamp = Date.now;
console.log(myTimeStamp())
console.log(MyCreatedDate.getTime())
