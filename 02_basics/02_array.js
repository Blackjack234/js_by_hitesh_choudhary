const marvel = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

//marvel.push(dc) // Appends new elements to the end of an array, and returns the new length of the array.

// console.log(marvel);
// console.log(marvel[3][1]);

//const allhero = marvel.concat(dc)  //Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// console.log(allhero);

//const all_new_hero = [...marvel,...dc] // this '...' called spread oparator , it takes an array and spread it to indivitual values

// console.log(all_new_hero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(3) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth


// console.log(real_another_array);

// console.log(Array.isArray("anirban"));

// console.log(Array.from("anirban")); //Creates an array from an iterable object.
// console.log(Array.from({name:"anirban"})); // interesting case when it cant deside what to do it will return an Empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //Returns a new array from a set of elements.