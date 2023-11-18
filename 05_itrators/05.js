
// node 05_itrators/05.js
// for each loop**************

const codimg = ["js" , "ruby" , "swift" , "python" , "c++"]

// meth -1 
codimg.forEach( function (item) {
    console.log(item)
} )

// meth-2

codimg.forEach( (index_od_array) => {
    console.log("this is: " , index_od_array)
})

// meth-3

// pre defined function
function printMe(item2){
    console.log(item2)
}

codimg.forEach(printMe) // NOte :: in callback function you are giving refrance of function not calling it;


// itration on object of array by for each loop****************
const myCoding = [
    {
        langName : "javascript",
        langFilename : ".js"
    },

    {
        langName : "python",
        langFilename : ".py"
    },

    {
        langName : "c++",
        langFilename : ".cpp"
    }
]

myCoding.forEach((items) => {
    console.log(items.langName)
})
myCoding.forEach((items) => {
    console.log(items.langFilename)
})

