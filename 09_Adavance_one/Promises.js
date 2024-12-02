const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 1 ")
        resolve()
    },1000);
})

promiseOne.then(function(){
    console.log("asyn 1 resolved")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("asyn 2 resloved")
})

const PromisThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user : "username" , data : "data"})
    },1000)
})

PromisThree.then(function(user){
    console.log(user)
})


const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false 
        if(!error){
            resolve({username : "sonal" , data : "data"})
        }else{
            reject("Something went wrong")
        }
        
    },1000)
})

PromiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(myuser){
    console.log(myuser)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("Promis has already resolved or rejected")
})

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username : "javascript" , password : "data"})
        }else{
            reject("javascript failed")
        }
        
    },1000)
})

async function consumePromiseFive(){ 
    try {
        const resposne = await PromiseFive
        console.log(resposne)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(params) {
//     try {
//         const resposne  = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resposne.json()

//     console.log(data)
//     } catch (error) {
//         console.log(error)
//     }

// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
})