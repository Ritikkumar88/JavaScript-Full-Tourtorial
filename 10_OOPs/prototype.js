
// ======= Challange ===============
// let myName = "Ritik      "
// console.log(myName .truelength());


let myHeros = ['thor' , 'spiderman']

heropower = {
    thor : "hammer",
    spiderman : "sling",

    getspiderPower: function(){
        console.log(`spderman power is ${this.spiderman}`)
    }
}

// *******enjecting a property in object************

Object.prototype.ritik = function(){
    console.log("Ritik is present in all object from onject")
}

Array.prototype.heyRitik= function(){
    console.log("Ritik is saying hello from array")
}

heropower.ritik();
myHeros.ritik();
myHeros.heyRitik();

// heropower.heyRitik();  // no access of heyRitik() in myHeroes;

// *******Inharitance ********************

const user = {
    name : "pihu",
    mail: "kaatnewali@123"
}

const teacher = {
     makeVideo : true
}

const teacheingsupport = {
    inAvilable : false
}

const TAsupport = {
    makeassingment : "JS assingment",
    fullTime : true,
    __proto__: teacheingsupport
}

teacher.__proto__ = user


// ==========Modern syntext for inharitance======================

Object.setPrototypeOf(teacheingsupport , teacher)


// challange solution:::
let anotherUserName = "RitikTheMen     "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Lenght is ${this.trim().length}`)
}

anotherUserName.trueLength()
"m a a a  a ".trueLength()





