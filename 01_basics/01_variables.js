const accountId = 14413;
let accountEmail = "anirban@google.com";
var accountPass = 12345;
accountCity = "kolkata"
let accountState; // undefined

// accountId = 2; //not allowed for const values to be changed
accountEmail="hc@ha.com";
accountPass = "233323";
accountCity = "Bengaluru" 
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity,accountState])