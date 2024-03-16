let score = "33avc"
let score1 = null
let score2 = undefined
let score3 = true

//console.log(typeof score);

let valueofScore = Number(score)// this way u can convert string to number data type
let valueofScore1 = Number(score1)// this will convert null into 0
let valueofScore2 = Number(score2)// this wil convert into NaN
let valueofScore3 = Number(score3)// this will convert into 1/0 depending on true/false

//console.log(typeof valueofScore);
//console.log(typeof valueofScore1);
//console.log(typeof valueofScore2);
//console.log(typeof valueofScore3);
//console.log(valueofScore); //NaN is also treated as number in js 
// console.log(valueofScore1); // 0
// console.log(valueofScore2); //NaN
// console.log(valueofScore3); // 1

/*
"33"=> 33
"33abv"=>NaN
true=>1/false=>0
"Anirban"=>NaN
*/

//Boolean convarsion

let isLoggedIn = "Anirban"

let valueIsloggedIn = Boolean(isLoggedIn)
// console.log(valueIsloggedIn);

// 1=>true/0=>false
//""=>false
//"Anirban"=>true


// string convertion

let SomeNumber = 33

let stringNumber = String(SomeNumber)

console.log(stringNumber);
console.log(typeof stringNumber);
