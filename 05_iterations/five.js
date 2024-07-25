//foreach

const coding = ["py", "rb","java","cpp"]

// coding.forEach(function(item){
//     console.log(item)
// })

// coding.forEach( (item) =>{
//     console.log(item)
// })

// function pritme(item){
//     console.log(item)
// }

// coding.forEach(pritme)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })

const myConding = [
    {
        langName : "js",
        langFileName : "javascript"
    },
    {
        langName : "java",
        langFileName : "java"
    },
    {
        langName : "py",
        langFileName : "python"
    }
]

myConding.forEach( (item)=>{
    console.log(item.langFileName)
})