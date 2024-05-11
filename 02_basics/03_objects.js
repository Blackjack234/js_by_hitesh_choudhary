//singleton


//objects literals

const mySym = Symbol("key1") //symbol declearation

const jsUser = {
    name:"Anirban",
    age:18,
    "full name":"Anirban paul",
    [mySym]:"mykey1",//syntax how to use symbol as a key 
    email:"anirban@mail.com",
    location:"kolkata",
    isLogIn:false,
    lastLogIn:["monday","sunday"]
}


//console.log(jsUser.email);
//console.log(jsUser["email"]);//for this u have to pass the key name as a string to work 
//console.log(jsUser["full name"]);// for this kind of key name u have use square brackets
//console.log(jsUser[mySym]);// this is how to call a symbol as a key u dont need to pass as string


jsUser.gretting = ()=>{
    console.log("Hello JS User");
}

jsUser.grettingTwo = function(){
    console.log(`hello, ${this.name}`);
}// to refarece the same object inside the object we will use this key word.keep in that mind  with arrow fuction this keyword normaly don't work.

//console.log(jsUser.gretting);//this return the refarence of that function , function will not execute.
console.log(jsUser.gretting());
console.log(jsUser.grettingTwo());

jsUser.email = "anirban@gmail.com"// this is how u can change a value
Object.freeze(jsUser)// by this u will freeze this object and nothing can be chenged further
jsUser.email = "anirban@yahoo.com"

// console.log(jsUser);