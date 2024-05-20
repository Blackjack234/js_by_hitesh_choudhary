const user = {
    username:"Anirban",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to  website`); // this always reffs to current context, u can't simply write username.
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);//when in node env 'this' will reffer to an empty object,but in browser env 'this' will show window global object

// function chai(){
//     let username = "anirban"
//     console.log(this.username); 
//     so this will not work inside a function. only inside an object
// }


const chai = ()=>{
    let username = "ani"
    console.log(this);
}

// chai()


// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

//implicit return 
// const addTwo = (num1,num2)=>  num1 + num2
// const addTwo = (num1,num2)=>  (num1 + num2)
// const addTwo = (num1,num2)=>  ({username:"ani"}) // if u want to return objects u have to invlude parenthisis '()'

   



console.log(addTwo(3,4));