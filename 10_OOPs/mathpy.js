const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(discriptor);

// Math.PI = 5;  // overwriting the PI value but it will not be overwrite
// console.log(Math.PI);

const obj1 = {
    name : "Briyani",
    price : 250,
    isAbilabe : true
}

console.log(Object.getOwnPropertyDescriptor(obj1 , 'name'))

// here we are changing object property from writable to !writable;
Object.defineProperty(obj1 , 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(obj1 , 'name'))

// now if we change the name property it will not change as it is not writable



