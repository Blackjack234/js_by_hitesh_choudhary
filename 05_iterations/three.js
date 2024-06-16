// for of loop

// ["","",""]
//[{},{},{}]

const someArray = [1,2,3,4,5]

for (const num of someArray) {
    // console.log(num);
}

const  grettings = "Hello world"

for (const greet of grettings) {
    // console.log(greet);
}


//Maps

const map = new Map()

map.set("IN","India")
map.set("USA","Unnited States Of Amarica")
map.set("Fr","France")
map.set("IN","India")


// console.log(map);

for (const [key,val] of map) {
    // console.log(key,":-",val);
}

const myObject = {
    "game1":"NFS",
    "game2":"Spiderman",
    "game3":"Assassin creed"
}

// for (const [key,val] of myObject) {
//     console.log(key,":-",val);
    
// }

// can not loop object like this ok.
