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


// +++++++++++ Nested scope +++++++++++++++++++++++++++++

function one(){
    const username = "Ritik"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}

one()


if(true){
    const user = "shroff"
    if(user === "shroff"){
        const website = "youtube"
        console.log(user + website)
    }
    // console.log(website);
}

// console.log(user);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


// ++++++++++++++  Intrasting concept +++++++++++++++++++

console.log(addOne(5))  //this function can be called before initialization there will be no errors
function addOne (num){
    return num+1
}




// function in expressions
addtwo(5)   // this function cannot be called before initialization as there , this fn is alredy assign to a variable and variable cannot be access before initialization
const addtwo = function(num){
    return num+2
}
