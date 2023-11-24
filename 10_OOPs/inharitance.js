class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`user name is :: ${this.username}`)
    }
}

class teacher extends user{
    constructor(userName , email , password){
        
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}


const user1 = new teacher("Ritik"  , "Ritik@123" , 123456)
user1.addCourse()

const user2 = new user("Aayush")
user2.logme()