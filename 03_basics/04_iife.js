//  node 03_basics/04_iife.js


// immidiatly invoked function expressions (IIFE)


// function chai(){
//     console.log(`db connecte`)
// }
// chai()

// another way to call a function by paranthisis :: ()()
// in first parenthisis weare definig function and by 2nd () we are calling fun;

(function chai(){
    console.log(`db connecte`)
})();

( chai = () => {
    console.log(`db connecte two`)
})()



