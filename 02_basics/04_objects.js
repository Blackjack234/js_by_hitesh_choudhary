const tinderUser = new Object() // singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLog = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            fname:"Anirban",
            lname:"paul"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2) //{} this acts as a target and other objects acts as sources


const obj3 = {...obj1,...obj2} // we will use speard oparator most of the time to mearge objects like this .
// console.log(obj3);


const users = [
    {
        id:1,
        email:"a@mail.com"
    },
    {
        id:2,
        email:"a@mail.com"
    },
    {
        id:3,
        email:"a@mail.com"
    }
] // simulating database values normaly in array object format 


// console.log(users[1].email);

// console.log(Object.keys(tinderUser)); //Returns the names of the enumerable string properties and methods of an object. this returns an array containg all the keys of that 
// objects in an array format.
// console.log(Object.values(tinderUser)); // similar to keys methos but returns an array contaning the values of the object
// console.log(Object.entries(tinderUser)); // returns an array and every key value is turn into an array of 2 elements itself

// console.log(tinderUser.hasOwnProperty("isLogin"));


const  course = {
    courseName:"js in hindi",
    price:"999",
    Techer:"Anirban"
}

const {courseName:name,price,Techer} = course

// console.log(`course is ${courseName}, price is ${price} and teacher ${Techer}`);
console.log(`course is ${name}, price is ${price} and teacher ${Techer}`);