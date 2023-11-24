function Multiply(num){
     return num*5
}

console.log(Multiply.power = 2);
console.log(Multiply(5));
console.log(Multiply.prototype)

// *******conclusion :: everything is in js is object there is nothing which is father of object it's only null;

function createUser (username , score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is : ${this.score}`)
}

const user1 = new createUser("Rahul" , 250)
const user2 = new createUser("Ram" , 300)

user1.printMe()

