
// node 05_itrators/03.js 

// for of loop********************

// use of for of loop on array;
// const myarr = [1,2,3,4,5]

// for (const i of myarr) {
//     console.log(i)
// }

// map***************

const map = new Map()
map.set('IN' , "India")
map.set('us' , "usa")
map.set('fr' , "france")
map.set('it' , "itly")

console.log(map)

// use of for of loop on map;
for (const [key , val] of map) {
    console.log(`this is my key : ${key} , and this is my value : ${val}`)
}





