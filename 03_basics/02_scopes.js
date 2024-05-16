// let c = 300
 let a = 400

// '{}' this is called scope when with code like if else, functions, etc. But in single it is object declearation.
//inside this code will be block scoped, and out side is global scope. global variables are available inside block scope to use 
//but block scope variables are not avaidable out side the block scope.

if(true){
    let a = 10
    const b = 20

    console.log("INNER : ", a);

}

console.log(a);
// console.log(b);
// console.log(c);