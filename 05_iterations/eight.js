const myNums = [1,2,3,4]


const initial = 0

const MyTotal = myNums.reduce((acc,curval)=>{
    console.log(`acc : ${acc} and  currval : ${curval}`);
    return acc+curval
},initial)

console.log(MyTotal);