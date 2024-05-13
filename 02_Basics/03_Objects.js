// singleton  - Object.create

// objects literals

const mySymbol = Symbol("key1")

const jsUser = {
    name : "Sonal",
    [mySymbol] : "mykey1",              //[Symbol(key1)]: 'mykey1'
    "full name" : "sonal Mane",
    age : 22,
    location : "Pune",
    email : "sonal@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Saturday"] 
}

// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySymbol])
// console.log(typeof jsUser[mySymbol])


// jsUser.email = "sonal@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "sonal@ms.com"

jsUser.greeting = function(){
    console.log("Hello users")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name} `)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

