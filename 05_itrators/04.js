


// node 05_itrators/04.js 


// forin loop*************

const obj1 = {
    "js" : "javascript",
    "py" : "python",
    "cpp" : "c++"
}

// +++++++++++  for loopning in objects we use forin loop

// key
for (const i in obj1) {
    console.log(i);
    }

    // value
for (const i in obj1) {
    console.log(obj1[i]);
    }


// key and value both;
for (const i in obj1) {
    console.log(`${i} : : ${obj1[i]}`)
}