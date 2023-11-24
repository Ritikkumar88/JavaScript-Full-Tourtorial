class user {
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email (mail){
        this._email = mail
    }


    get password(){
        return this._password.toUpperCase()
    }

    set password (val){
        this._password = val
    }
}

const user1 = new user("Ritik" , "999m@123")
console.log(user1.password)