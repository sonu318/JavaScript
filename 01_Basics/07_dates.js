//DAtes

let myDate = new Date()

// console.log(myDate)                     //2024-05-10T03:48:56.246Z
// console.log(myDate.toString())          //Fri May 10 2024 03:48:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString())  //5/10/2024, 3:48:56 AM

// console.log(typeof myDate)

// let myCreatedDate = new Date(2024 , 0 , 32)
// console.log(myCreatedDate.toDateString())       //Thu Feb 01 2024

// let myCreateDate = new Date(2024 , 2 , 31 , 5, 6)
// console.log(myCreateDate.toDateString())   
// console.log(myCreateDate.toLocaleString()) 

let myTimeStamp = Date.now()
// console.log(myTimeStamp)

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default' , {
    weekday : "long"
})
