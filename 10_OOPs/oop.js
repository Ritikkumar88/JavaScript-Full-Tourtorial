
// --------> Object Litral and This keyword <--------------------------

// const user = {
//     username : "Ritik",
//     loginCount : 8,
//     signedIN : true,

//     getuserDetails : function(){
//           console.log("got user details from DB");
//           console.log(`username : ${this.username}`)
//           console.log(this)
//     }

// }


// console.log(user.username)
// console.log(user.getuserDetails())


// --------------------------> constructor function <--------------------------
//  new keyword is used to create new context;

function user (username , logingCount , isLoggedin){
    this.username = username
    this.loginCount = logingCount
    this.isLoggedin = isLoggedin

    return this;

}

// const user1 =  user("ritikkk" , 85 , false)
// const user2 =  user("heheheheh" , 5 , false)
// console.log(user1)
// console.log(user2)

const user1 = new user("ritikkk" , 85 , false)
const user2 = new user("heheheheh" , 5 , false)
console.log(user1)
console.log(user2)



// *********working of new keyword:****************

// 1) creates a instance (empty object)
// 2) constructor function called due to new keyword
// 3) this keyword inject its arguments into new object
// 4) we got every things in fnction