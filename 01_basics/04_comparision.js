// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 < 1);
// console.log(2 <= 1);

// result will be in boolean value true or false

// console.log("2" > 1);
// console.log("02" > 1);

// js will automatically convert string to number and the performed the task (result => true true)


console.log(null >0);
console.log(null ==0);
console.log(null !=0);
console.log(null >=0);

/*  
the reson for that is equality check == and comparision > < >= <= works differently
the comparisons convert null into 0

that why null >= 0 is true

and null >0 is false

we should allways try to avoid this type of comparisons

*/