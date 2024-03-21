// dates 


let myDate = new Date();

console.log(myDate);// returns a date with many more unreadable things
console.log(myDate.toString());// convert to string and give day, month, date, year, time  Gmt standards
console.log(myDate.toDateString());//return a string with day,month,date,year
console.log(myDate.toISOString());// return  same thing as normal date but in string format
console.log(myDate.toJSON());//
console.log(myDate.toLocaleDateString());//return mm/dd/yyyy format
console.log(myDate.toLocaleString());//usa uses month-day-year order and 12-hour time  AM/PM
