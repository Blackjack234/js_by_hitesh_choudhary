const score = 400

const balance = new Number(100)
// console.log(balance);
// console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const anothernum = 1123.8967
//console.log(anothernum.toPrecision(3));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString("en-IN"));// default us number standard, but u can change it but passing argument

//++++++++++++++++++++++++++++++++++++++++++++          Math          +++++++++++++++++++++++++++++++++++++++++++++

//console.log(Math);

//console.log(Math.abs(-4)); // returns absolute value of a number return 4

//console.log(Math.round(4.6)); // it will round of a decemal number is after . number >5 choose bigger value or smaller value

//console.log(Math.ceil(4.2)); // celing method alway round of and choose the bigger value
//console.log(Math.floor(4.9)); // floor method always round of the value and choose lesser value
//console.log(Math.min(4,3,5,6,7)); // take the smallest value and return it
//console.log(Math.max(4,3,5,6,7,8));///take the largest value and return it 


console.log(Math.random()); // this will return a value between 0 and 1 randomly mostly dacemal number

// to a number in integer * 10, and to avoide getting 0 in integer position just do +1
 console.log((Math.random() *10) +1);

 //sometimes u need just the integer value so wrap up with floor method

 console.log(Math.floor((Math.random()*10) +1));

 // now to get a nuber b/t any max and min range we have gen formula 

 const max = 30;
 const min = 10;

 console.log(Math.random() * (max - min +1)); // it can still get u decemal and less then min value 
 console.log(Math.floor(Math.random() * (max-min +1)) + min);// to get atleast min value all time  do +min with the rest 