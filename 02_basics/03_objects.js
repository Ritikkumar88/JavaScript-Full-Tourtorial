
// node 02_basics/03_objects.js

// singleton 

// +++++++++++++++++ declairing object by litrals (NOte :: whwn object is made by litrals singleton will not made, while it will be made when object is made by constructors)


// this sintext is for constructor (singleton)
// Object.create


// this sintex is for litral (not singleton)

const jsUser = {
    Name : "Ritik",
    LName : "shroff",
    "full Name" : "Ritik shroff",
    age : 18,
    location : "jaipur",
    email : "rr824566@gmail.com",
    isLoggedIn : false,
    lastLoginDay: ["Monday" , "Saturday"]
}

// we can access a object in two ways;
console.log(jsUser.Name);  // Period Notation
console.log(jsUser["email"]);  // Sqare Notation

console.log(jsUser["full Name"]);


// declairing Symbol :: 
const mySym = Symbol("key1")

// using this symbol datatype in object

const useSym = {
    [mySym] : "myKey1"
}

console.log(typeof useSym[mySym])
console.log(useSym[mySym])


// changing object value
jsUser.email = "hitesh@123"
console.log(jsUser["email"])

// freezing object value so that it cannot be changed further
// Object.freeze(jsUser);
jsUser.Name = "GPYT";   // name will not change as it is freeze

console.log(jsUser["Name"])

// function in object 

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greeting2 = function(){
    console.log(`hello js user2 ${this["full Name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting)
console.log(jsUser.greeting2())