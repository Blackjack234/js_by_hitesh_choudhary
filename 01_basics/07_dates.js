// dates 


let myDate = new Date();

//console.log(myDate);// returns a date with many more unreadable things
//console.log(myDate.toString());// convert to string and give day, month, date, year, time  Gmt standards
//console.log(myDate.toDateString());//return a string with day,month,date,year
//console.log(myDate.toISOString());// return  same thing as normal date but in string format
//console.log(myDate.toJSON());//
//console.log(myDate.toLocaleDateString());//return mm/dd/yyyy format
//console.log(myDate.toLocaleString());//usa uses month-day-year order and 12-hour time  AM/PM

//const myCreatedDate = new Date(2024,2,26) // in js months are started from 0 to 11 (0 is for jan and so on)
// const myCreatedDate = new Date(2024,2,26,10,25,12,)
const myCreatedDate = new Date('01-23-2024')

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let mytimeStamps = Date.now() // date.now() gives u a value in milisec form 1 jan 1970 till now 
//console.log(mytimeStamps);
//console.log(myCreatedDate.getTime());// this will return milisec from the date object

//console.log(Math.floor(Date.now()/1000));//to convert milisec to sec and roud it of 


let myNewDate = new Date()

//console.log(myNewDate.getDate());// get the day -of -the - month using local time
//console.log(myNewDate.getDay()); // gets the day of the week using local time (weeks start from monday is  1)
//console.log(myNewDate.getTime());//gives the milisec value
//console.log(myNewDate.getMonth());//get the months using local time return number (months starts at 0 is jan)
//console.log(myNewDate.getFullYear());//get the year full (2024)
//console.log(myNewDate.getHours());//get the hours in a date

// you can more customize the date by using toLocalString

let toDate = myNewDate.toLocaleString("default",{
    weekday:"long",
    era:"long",
    day:"2-digit"
    
})

console.log(toDate);



