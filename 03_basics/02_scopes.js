// let c = 300
 let a = 400

// '{}' this is called scope when with code like if else, functions, etc. But in single it is object declearation.
//inside this code will be block scoped, and out side is global scope. global variables are available inside block scope to use 
//but block scope variables are not avaidable out side the block scope.

if(true){
    let a = 10
    const b = 20

    // console.log("INNER : ", a);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Anirban"

    function two(){
        const website =  "somthing.com"

        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

if(true){
 const username = "anirban"

 if(username === "anirban"){
     const website = " something.com"

    //  console.log(username + website);

 }
//  console.log(website);
}

// console.log(username);

//++++++++++++++++++++++ interesting +++++++++++++++++++++

//hoisting


console.log(addone(5));

function addone(num){
 return num + 1
}

// addone(5)

//below this is called an expression ,simplly a variable holding a function

addtwo(5) // Cannot access 'addtwo' before initialization

const addtwo = function(num){   
return num + 2
}

// addtwo(5)
