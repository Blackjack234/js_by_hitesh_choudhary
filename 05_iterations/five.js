//  forEach loop


const codding = ["js","ruby","java","pythone","c++"]

// codding.forEach((item)=>{
//  console.log(item);
// })

// function printme(item){
// console.log(item);
// }

// codding.forEach(printme)

// codding.forEach((item,index,arr)=>{
// console.log(item);
// console.log(index);
// console.log(arr);
// })

const myCoding  = [
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"java",
        languageFile:"java"
    },
    {
        languageName:"python",
        languageFile:"py"
    }
]


myCoding.forEach((item)=>{
console.log(item.languageName);
})