// primitive datatypes(call by values)

/*
 7 types : String,Number,Boolean,null,undefined,symbol,BigInt
*/

// is js statically typed language or dynamically typed language ?


let id = Symbol("123")
let anotherId = Symbol("123")

console.table([id,anotherId])
console.log(id === anotherId);

let bigNumber = 7892143947892374832784n //this is how bigint decleared in js

// Reference (Non primitive)

// Array,Objects,functions


let myArray = ["superman","batman","spiderman"]
let myObject = {
    name:"Anirban",
    age:26
}

let myFunction = function(){
    console.log("hello world");
}

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/