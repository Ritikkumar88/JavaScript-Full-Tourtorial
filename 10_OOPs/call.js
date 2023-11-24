function setUserName(useranme){
    // complx DB calls
    this.useranme = useranme
}

function createUser(username , email , password){
    
    setUserName.call(this, username)  // use of call and this , to call a method 

    this.email = email
    this.password = password

}

const newUser = new createUser("imaam" , "123@123" ,  123456)
console.log(newUser)