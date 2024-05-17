if(true){
let a = 10 
const b = 20
var c = 30
}

// console.log(a)               //not defined - local scope
// console.log(b)               //not defined - local scope
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