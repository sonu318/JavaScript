function sayMyName(){
    console.log("S")
    console.log("M")
}

// sayMyName()             //sayMyName - reference and sayMyName() -- execution

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

console.log(isLoggedIn("sonal"))