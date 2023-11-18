// node node 05_itrators/01.js 

// for***********************

for (let i = 0 ; i < 10 ; i++){
    const ele = i;
    if (ele == 5){
        console.log(ele , "is best number")
    }
    console.log("this is " , i)
}

// tabel print by loop

// for (let i = 1; i <= 100; i++) {
//     console.log(`**** table of : ${i} *****`)
//     for(let j = 1 ; j <= 10 ; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
    
// }


// let myarr = ["a" , "b" , "c"];

// for(let i = 0 ; i <= myarr.length; i++){
//     console.log(myarr[i])
// }



// keywords**********

// break and continue

for (let index = 1; index <= 20; index++) {
     
    if(index==5){
        console.log("detected 5");
        // break;
        continue;
    }

    console.log("val of i is : " , index);
    
}