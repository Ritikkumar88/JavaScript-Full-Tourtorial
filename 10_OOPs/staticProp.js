class user{
    constructor(username){
       this.username - username
    }

    logMe(){
        console.log(`username :: ${this.username}`)
    }

    static createId(){
        return `${Math.floor(Math.random()*10+1)}`
    }
}

const user1 = new user("Ritik")
console.log(user1.createId())