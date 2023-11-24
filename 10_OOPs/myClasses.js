
// class user {

//     // construvtor
//     constructor (username , email , password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     ChangeuserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new user("Ritik" , "9555@qwe", 9555325902)
// console.log(user1.encryptPassword())
// console.log(user1.ChangeuserName())


// **************> behind the seen <*****************************

function user(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.ChangeuserName = function(){
    return `${this.username.toUpperCase()}`
}

const mainUser = new user("aayush" , "9555@qwe" , 55555);
console.log(mainUser.ChangeuserName())
console.log(mainUser.encryptPassword())