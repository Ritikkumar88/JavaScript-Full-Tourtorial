const promise1 = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, Cryptography , network
    setTimeout(() => {
        console.log("asyncTask is compleate")
        resolve()
    }, 1000)
})


promise1.then(function () {
    console.log("promise is Consumed");
})