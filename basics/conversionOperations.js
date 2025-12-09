let score = "34abc"  //can be converted but will be of type NaN

// console.log(typeof (score));

let value = Number(score)
// console.log(typeof (value));
// console.log(value);

let loggedIn = 1
let boolLogged = Boolean(loggedIn)   //empty string , 0  is false rest true

// console.log(boolLogged);

let val = 3
let neg = -val
// console.log(neg);

let str1 ="hello"
let str2 = " world"

// console.log(str1 + str2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log("2" > 1);

// console.log(null > 0);  //false
// console.log(null == 0);  //false
// console.log(null >=0);   //true

//comaprisions convert null to 0 but equality works differnert

// strict check === ; checks for value as well as data type

// console.log("2" ==2);
// console.log("2" ===2);


// there are two types of data - primitive and non primitive on basis of memory store

//javascript is DYNAMICALLY TYPED - type is defined during runtime
//primitive  : called by value(changes are made in the copy)

//7 types :  string , number , bool ,null , undefined , Symbol ,BigInt

//Refrence type - non - primitve (refrence can be directly given)

//Array , Object ,functions

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)   //even though they have same value symbol makes it differnet

const gender = ['male' ,'female'];

//defiining a class
let myObj = {
    name : "Aadra",
    age : 20,
    gender : "female",
}

//defining a function 

const MyFunc = function(){
    console.log("hello world");
}

