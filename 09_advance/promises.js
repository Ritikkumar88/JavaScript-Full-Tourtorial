
// node 09_advance/promises.js 




// creation of promises;
const promise1 = new Promise(function (resolve, reject) {
    // ++what task can be done by promises?++++
    // do an async task
    // DB calls, Cryptography , network
    setTimeout(() => {
        console.log("asyncTask is compleate")
        resolve()
    }, 1000)
})

// .then is associated to resolve parameter;
promise1.then(function () {
    console.log("promise is Consumed");
})

// ----------------------***********************************-------------------
new Promise(function(resolve , reject){
     setTimeout(function(){
        console.log("asinc Task 2");
        resolve()
     },1000)
}).then(function(){
    console.log("asyinc 2 resolved");
})


// -----------------------------------------------------------------
const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
     resolve({username : "Ritik" , email:"email.com"})
    },1000)
})

promise3.then(function(user){
      console.log(user);
})

// -----------------------------------------------------------------------
const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
       let error = true;
       if(!error){
        resolve({username : "RItik" , Password : 123456})
       }else{
        reject('error ::  something went wrong')
       }
    }, 2000)
})

promise4
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("finally the promis is either resolved or rejected")
})

// ------------------------------------------------------------------------------

const promise5 = new Promise(function(resolve , reject){
    setTimeout(function(){
       let error = true
       if(!error){
        resolve({username : "Javascript" , Password : 123456})
       }else{
        reject('error: error : error:')
       }
    },1000)
});

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise5()

// ------------> async await method used <-----------------------------------
// async function getAllUser(){
//    try {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//    const data = await response.json()
//    console.log(data)
//    } catch (error) {
//     console.log("error :: this is error");
//    }
// }
// getAllUser()


// ---------------------------> .then() .cathch() format<--------------------------

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))