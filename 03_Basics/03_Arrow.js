const user = {
    username : "sonal",
    price :1000,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
    
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this)

function chai(){
    console.log(this)
}

chai()


const chai = function(){
    let username = "sonal"
    console.log(this.username)
}

chai()                                  //undefined

const chai = ()=>{
    let username = "sonal"
    console.log(this.username)
}
chai()                                      //undefined


//------------Arrow functions---------

const addTwo = (num1 ,num2) =>  num1 + num2                     //implicite return
const addTwo = (num1 ,num2) =>  (num1 + num2)
const addTwo = (num1 ,num2) => {                                //explicite return
    return num1 + num2
}
console.log(addTwo(3,5))

