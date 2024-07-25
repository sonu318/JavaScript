// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello world!!"

for (const greet of greetings) {
    // console.log(greet)
    // console.log(`Each greet is ${greet}`)
}


//Maps

const map = new Map()

map.set('IN', 'India')
map.set('USA' , 'United States of America')

console.log(map)

// for (const key of map) {                //[ 'IN', 'India' ]
//                                         //[ 'USA', 'United States of America' ]
//     console.log(key)
// }

for (const [key,value] of map) {
    console.log(key)                        //IN
                                            //USA
}

const myObject = {
    'game1' : 'Pubg',
    'game2' : 'Spiderman'
}

for (const [key,vakue] of myObject) {
    console.log(key)                           //myObject is not iterable     
}