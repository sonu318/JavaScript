//map

const num = [1,2,3,4,5,6,7]

// const mymap = num.map((num)=>{
//     return num+4
// })

//chaining

const newNum = num
                .map((num)=> num * 10)
                .map((num)=> num+1)
                .filter((num)=> num>40)

console.log(newNum)