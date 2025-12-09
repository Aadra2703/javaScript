const accountId = 25678    //can't be changed
let accountEmail = "ad.9897054313@gmail.com"
var accountPassword = "123456"     //issues in block and functional scope so we use let for it
accountCity = "Jaipur"
let accountState;
accountEmail = "abc@hma.com"
accountPassword = "9898"
accountCity ="Agra"

console.log(accountId);
console.table([accountId , accountEmail ,accountPassword ,accountCity ,accountState]);
