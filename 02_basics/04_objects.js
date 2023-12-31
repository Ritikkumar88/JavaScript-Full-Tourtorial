
// node 02_basics/04_objects.js


// singleton object declaired as a constructor
// const tinderUser = new Object()

//  non singleton object declaration
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
       fullnameUser: {
        firstname : "Ritik",
        lname : "shroff"
       }
    }
}

console.log(regularUser.fullName.fullnameUser.firstname);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}

const obj3 = {obj1, obj2}
console.log(obj3);

// assingning all the object in a single object
obj4 = Object.assign({} , obj1 , obj2)
console.log(obj4)

obj5 = {...obj1 , ...obj2}
console.log(obj5);

// extracting data from a database object

const user = [
    {
        id : 1,
        email : "7485@gmail.com",
    },

    {

    },

    {

    }
]

console.log(user[0].email);

console.log("+++++++++++++++++++++++++++++++++++++++++++++")
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(typeof Object.keys(tinderUser));
console.log(Object.values(tinderUser));


// ++++++++++++++++++ de structuring in objects +++++++++++++
const course = {
    courseName : "Js in hindi",
    Price : 999,
    indtructor : "hitesh sir"
}

// const {indtructor} = course;  // syntet for de structure object 's key value pair
// console.log(indtructor);

// we can also change the nave of our key;
const {indtructor : teacher} = course;  // syntet for de structure object 's key value pair
console.log(teacher);

// +++++++++++++++++ jason +++++++++

// {
//     "name" : "ritik",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }


// note : its not mendatory , that api;s are always in the form of objects
// sometimes it is in the form of arrays also;

[
    {},
    {},
    {},
    {},
    {}
]




