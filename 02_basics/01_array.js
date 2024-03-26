//array
 const myArr = [1,2,3,4,5,6,7]
const myHeros = ["Superman","Spiderman"]
const myArr2 = new Array(0,2,4,6) // different types to declear arry
//  console.log(myArr[0]);

//  Array methods

//myArr.push(8)//add anew element to the end of the array and return the new array length
//console.log(myArr.pop()); // remove the last element of the array and return it 
//myArr.unshift(9)//insert a new element at the start of an arry,returnd the new length of an arry
//myArr.shift()//Removes the first element of an array , and returns the element 



//console.log(myArr.includes(10)); //determinds a certain element is present in array or not ,return boolean value
//console.log(myArr.indexOf(7)); //Returns the index of the first occurrence of a value in an array,or -1 if it is not present.

let newArry = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.


// console.log(myArr);
// console.log(typeof newArry);

//slice, splice

console.log("A ",myArr);

let myn1 = myArr.slice(0,3)  //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array

console.log(myn1);
console.log("B ",myArr);


let myn2 = myArr.splice(0,2) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log("C ",myArr);
console.log(myn2);
