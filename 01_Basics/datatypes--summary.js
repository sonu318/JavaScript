//----- Primitive ------ 
//  7 types  : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scroeValue = 100.3
const isLoggedIn = true
const Temp = null               //null as an object
let userEmail = undefined      //let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 787304752075249n


//----- Reference (non-primitive)------
// Array , Objects , Functions 

const flowers = ["lotus" , "rose" , "jasmin"]   //object

let MyObj = {
    name : "lotus",
    type :"flower",
    count : 10                                                       //object
}

const myFunction = function(){
    console.log("Hello world")                                         //functions
}


console.log(typeof score)
console.log(typeof scroeValue)
console.log(typeof isLoggedIn)
console.log(typeof Temp)                  
console.log(typeof userEmail)
console.log(typeof flowers)
console.log(typeof MyObj)
console.log(typeof myFunction)


//***************************************************************** */

//Stack (Primitive) and Heap (Non-primitive)

let name1 = "Riya"
let anothername = name1

anothername = "Piya"

console.log(name1)
console.log(anothername)



let userOne = {
    Email : "user1@gmail.com",
    age : 23
}

let userTwo = userOne

userTwo.Email = "user2@gamil.com"
userTwo.age = 10

console.log(userOne)
console.log(userTwo)