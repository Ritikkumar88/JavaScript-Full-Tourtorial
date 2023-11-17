// node 03_basics/02_scopes.js



// ++++++++++++++scope++++++++++++++++++

var c = 900
let a = 250

if (true) {

    let a = 10
    // const b = 20
    var c = 30  // we do not use var keyword because it do not follow scope, we can access var out side a scope also that is problem, that is why we should avoid var keyword;
    console.log("inner : " , a)
}

console.log("outer : " , a)
// console.log(b)
console.log(c)