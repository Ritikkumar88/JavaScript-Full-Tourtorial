

/*
There are two types of memories:
1) stack memory--> stack memory is used in all premetive datatype (here we get a copy of variable)
2) heap memory --> heap memory is used in all Non - premetive datatype (here we get the orignal variable)

*/


// eg:
let myname = "Ritik"      //these section of variables will be stored in stack as all of them are premetive type;
let anotherName = myname;
anotherName = "shroff";

console.log(myname);
console.log(anotherName);


//these section of variables will stored in heap as it is non premetive type;
let user1 = {
    email: "rr824566@gmail.com",
    upi: "9555325902@ybl"
}

let user2 = user1;
user2.email = "Ritik@google.com"
console.log(user1.email)
console.log(user2.email)


// node 01_basics/memories