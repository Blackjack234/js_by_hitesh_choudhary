function sayMyname(){
    console.log("anirban paul");
}

// sayMyname()

// function addTwoNumbers(num1,num2){
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
    
    let result = num1 + num2
    return result // after returning a value by using return key word the function will stop , and no further code will be executed.
  }

// const result = addTwoNumbers(10,20)

// console.log("Result : ",result);

function showUsername(username= "sam"){ // this way u defind a default value of ur parameter , so now the parameter can't be undefiend anymore
    if(username){
 return `${username} just logged in`
    }else{
        return `no name found`
    }
 
}

// const show = showUsername()
// console.log(show);

//rest oparetor "..." this will take multiple argument and mearge them into 1 array
function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(2000,100,4000,500,7890));

const user = {
    userName:"Anirban",
    price:6000
}

function handleObject(anyObject){
console.log(`the username is ${anyObject.userName} and price is  ${anyObject.price}`);
}

// handleObject(user)


const myNewArray = [100,200,400,600,789]

function returnSecondvalue(getarray){
    return getarray[1]

}

console.log(returnSecondvalue(myanewAppt));