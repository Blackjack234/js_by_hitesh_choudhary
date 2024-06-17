// const codding = ["js","ruby","java","pythone","c++"]

// const val = codding.forEach( (item)=>{
//     // console.log(item);
//     return item
// })

// console.log(val); // by this we know that forEach does not return a value

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNums.filter((num)=> {
//    return num >4
// })

// const newNums = []

// myNums.forEach((num)=>{
//   if(num >4){
//     newNums.push(num)
//   }
// })

// console.log(newNums);

const generateDummydata = (num)=>{
  const data = [];
  for(let i = 1;i<=num;i++){
    data.push({
        id:i,
        name:`user ${i}`,
        age:Math.floor(Math.random() *60) +20,
        email:`user${i}@example.com`
    });
  }

  return data
}

const dummyData = generateDummydata(20);

// console.log(dummyData);

const userData = dummyData.filter((user)=>{
 return user.age >= 50 && user.id >=6
})


console.log(userData);