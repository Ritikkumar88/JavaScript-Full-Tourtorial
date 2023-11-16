const name = "Ritik"
const repoCount = 50

// concatination using backticks;
// console.log(name + " " + repoCount + " " + "value");

// concatinations using backticks  (string interpolation method)
console.log(`hello my name is ${name} and my github repo count is ${repoCount}`)

// other way to declair string;
const gameName = new String("Ritik shroff");
console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4))
console.log(gameName.indexOf('i'))

const newGame = gameName.substring(0,3);
console.log(newGame);

const anotherString = gameName.slice(-4,-1);
console.log(newGame);

const newString1 = "     h h Riti k";
console.log(newString1);
console.log(newString1.trim())


const url = "www.google.com";
console.log(url.replace('goo' , 'GOO'))

const newString2 = new String("Ritik-shroff-gupta-verma-sony-shraff-saha-seth")
console.log(newString2.split('-'))


// node 01_basics/05string