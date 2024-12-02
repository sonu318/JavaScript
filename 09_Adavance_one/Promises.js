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