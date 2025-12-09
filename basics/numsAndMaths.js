const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toFixed(2))
console.log(balance.toString().length)


const num = 2231.4489
console.log(num.toPrecision(3))

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN'))   //automaticallys gives commas as per US standards
// Number.MIN_VALUE

console.log(Math.random())//gives values between 0 to 1

console.log((Math.random()*10 ) + 1)

const mini = 10 
const maxi = 20

console.log(Math.floor(Math.random()*(maxi - mini +1)) + mini)