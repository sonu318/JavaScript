const myArr = [0,1,2,true,4,"sonal"]

const arr = [0,1,2,3,4,5]

// console.log(arr[0])


//=========  methods 

// arr.push(6)
// arr.push(7)
// arr.push(8)
// arr.pop()

// arr.unshift(2)              //insert at starting pt
// arr.shift()                  //remove at  starting pt 

// console.log(arr.includes(9))         //if not presnet then false
// console.log(arr.indexOf(9))         //if not present then op = -1

// const newArr = arr.join()               //0,1,2,3,4,5 string

//=== slice ,splice

console.log("A ",arr)

const myn1 = arr.slice(1,3)

console.log(myn1)                           //A  [ 0, 1, 2, 3, 4, 5 ]
                                                // [ 1, 2 ]
                                                // B  [ 0, 1, 2, 3, 4, 5 ]
                                                // c  [ 0, 4, 5 ]
                                                // [ 1, 2, 3 ]
console.log("B ",arr)               

const myn2 = arr.splice(1,3)
console.log("c ", arr)

console.log(myn2)
