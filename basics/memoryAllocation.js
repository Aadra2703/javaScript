//MEmory - Stack and HEap

//primitive type - uses stack
//non - primitive - heap

let myName = "Aadra"
let anotherNAme = myName
anotherNAme = "Punnu"

// console.log(myName);
// console.log(anotherNAme);

//here we get the direct refrence in the heap memory 
let user1 = {
    email : "abc@gmail.com",
    upi : "user1@upi",
}

let user2 = user1

user2.email = "aadra@email.com"

// console.log(user1.email);
// console.log(user2.email);


const Name = "Aadra"
const repoCnt = 10

console.log( Name + repoCnt + " Value");

console.log(`My name is ${Name} and my repo count is ${repoCnt}`);

const gameName = new String('AAdra')   //declaring string this way gives it object like strucre

/*
{
  "0": "A",
  "1": "A",
  "2": "d",
  "3": "r",
  "4": "a",
  length: 5
}
  this is when we declare it that way,  it is not a good practice cause objects are compared by refrence to as

  new String("a") === new String("a")  // false

    rest both gets same properties
*/

console.log(gameName.toUpperCase());
console.log(Name.toUpperCase());

const newStr = gameName.substring(0,3)
console.log(newStr);

const anotherStr = gameName.slice(-5,4)
console.log(anotherStr)

const strMail = "https/aadra-sharma-smart/aadraSharma-id.com"

console.log(strMail.split('-'));