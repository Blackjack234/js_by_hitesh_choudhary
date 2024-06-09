// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

/*
above is the basic syntax for switch case in js 

*/

const month = 3 

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case ");
        break;
}


/*
now in switch case if a condition is matched then form theat matched portion to all the below code will be executed , that's why 
we use' break ' in it so that after the condition matched only that block will perform 

*/