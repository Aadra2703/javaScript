// in javascript dates are taken into refrence form 1 jan 1970 and is rgenerally represented in form of milliseconds

//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2025 , 9 ,8 ,5 ,6)
let myCreatedDate2 = new Date("2025-02-02")

console.log(myCreatedDate.toDateString())
console.log(myCreatedDate2.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
