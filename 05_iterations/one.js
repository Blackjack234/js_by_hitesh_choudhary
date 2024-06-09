// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element === 5){
    // console.log("5 is the best");
    }
    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {

    // console.log(`Table of ${i}`);
    for (let j = 0; j <= 10; j++) {
        
        // console.log(`Inner loop value ${j} and outer loop value ${i}`);

        // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}


let myArray = ["Batman","Superman","Flash"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    
    // console.log(element);
}


// key Words  break and continue



// for (let index = 1; index <= 20; index++) {

//     if(index === 5 ){
//        console.log(`Detected no. 5 loop is stoped`);
//        break
//     }
       
//     console.log(`value of i ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {

    if(index === 5 ){
       console.log(`Detected no. 5`);
       continue
    }
       
    console.log(`value of i ${index}`);
    
}