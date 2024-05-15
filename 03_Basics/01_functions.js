function sayMyName(){
    console.log("S")
    console.log("M")
}

// sayMyName()             //sayMyName - reference and sayMyName() -- execution

//===================================

function addTwoNum(num1 , num2){
    console.log(num1 + num2)
}

// addTwoNum(2,"3")        // op - 23

// const result = addTwoNum(2,3)
// console.log("Result: ",result)          //Result:  undefined

//================================

function add(num1,num2){
    return num1+num2
}
const res = add(5,5)
// console.log(res)                        //10


//==================================

function isLoggedIn(username){
    if(username === undefined){
        console.log("plz , enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(isLoggedIn("sonal"))


//==============================rest operator ...

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300))            //[ 100, 200, 300 ]

const user = {
    username : "sonal",
    age : 23
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username}  and age is ${anyobject.age}`)
}

// handleObject(user)


const myNewArr = [1,2,4,5]

function returnValue(getArray){
        return getArray[2]
}

console.log(returnValue(myNewArr))