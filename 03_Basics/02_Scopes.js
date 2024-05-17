if(true){
let a = 10 
const b = 20
var c = 30
}

console.log(a)               //not defined - block scope
console.log(b)               //not defined - block scope
console.log(c)                  //30--- global scope 


//----
let a = 100
if(true){
    let a = 2
    console.log("inner value :" , a)        
}
                                            //inner value : 2
                                            //outer value  100
console.log("outer value " , a)

// =====closure

function one(){
    const username = "Sonal"

    function two(){
        const website = "youtube"           //website is not defined
        console.log(username)
    }
    // console.log(website)
    // two()
}
one()


if(true){
    const username = "sonal"
    if(username === "sonal"){
        const website = "youtube"
        console.log(username + website)         //sonalyoutube
    }
    console.log(website)                        // website is not defined
}
console.log(username)                               // username is not defined


// --------------------- interesting --------------- hoisting in js 
addone(5)
function addone(num){                   //can declare function at begin
    return num+1
}

addTwo(5)
const addTwo = function(num){           //when holding function return in variable then cant declare function at begin 
    return num+2
}
