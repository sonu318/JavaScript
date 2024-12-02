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
})