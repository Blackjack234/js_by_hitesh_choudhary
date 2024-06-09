// falsy values 

/*
  false , 0 ,-0, BigInt 0n, "",null,undefined,NaN

  these values are falsy values cause js will interpreted them as false value.
  
  truthy values 

  all values which are not falsy value are called truthy value but some example are below:-

  "0","false","<white space>",[],{},function(){}

*/
const emptyArray = []
const emptyObject = {}
// if(emptyArray.length === 0){
//  console.log("Array is empty");
// }

// if(Object.keys(emptyObject).length === 0){
//  console.log("Object is empty");
// }

// Object.keys(emptyObject) this part will return an array contaning keys of the object 

// Nullish Coalescing Operator (??) : null undefined . all is compered to this two values only

let val1;
// val1 = 5 ?? 10 // in this case it will take the 1st value 5 
// val1 = null ?? 10 // it will take the value 10 not null
// val1 = undefined ?? 10 // it will take the value 10 

// val1 = null ?? 10 ?? 16  //after null system will take the 1st value and ignore the 2nd value


// console.log(val1);



// Terniary Operator  

// condition ? true :false

const iceTeaPrice = 100 

iceTeaPrice >=80 ? console.log("minimum price is 80") : console.log("icetea is less than 80");


