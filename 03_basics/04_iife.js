// Immediately invoked function expressions (IIFE)
// ()() syntaax 1st is function dafination 2nd one is execution syntax


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); //u need to explicitly give a puntuation to finish the code 

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
} )("anirban")