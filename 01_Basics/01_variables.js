const rollNumber = 1234
let accountEmail = "Riya@gmail.com"
var accountPassword = "12345"
accountCity = "Banglore"   //can use but bad practice
let accountState

//rollNumber = 54321   //constants value cant changed 
accountEmail = "Riya"
console.log(rollNumber);
console.log(accountEmail);

console.table([rollNumber,accountEmail,accountPassword,accountCity,accountState]);

/* 
Prefer not to use var  , use let and const 
because issue in block scope and functional scope 
*/
