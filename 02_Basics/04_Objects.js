const instaUser = {}

instaUser.id = "123"
instaUser.name = "Sam"
instaUser.isLoggedIn = false

// console.log(instaUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullName :{
            firstName : "sonal",
            lastname : "mane"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3: "c" , 4 : "d"}

//=== to merger two objects 

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)     // {} -  target  and obj1,obj2 - source
// const obj3 = {...obj1,...obj2}                  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj3)

// console.log(instaUser)
// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))            //key-value pair [ [ 'id', '123' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

// console.log(instaUser.hasOwnProperty('isLoggedIn'))         //true

// ============ object de-structure =====================
const course = {
    coursename : "Js tutorial",
    price : "999",
    courseinstructor : "Sonal"
}

const {courseinstructor : instructor} = course

console.log(instructor)