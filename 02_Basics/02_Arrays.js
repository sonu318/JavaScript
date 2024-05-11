const marvel_Heros = ["thor","Ironman","spiderman"]
const dc_Heros = ["superman","flash","batman"]

marvel_Heros.push(dc_Heros)             //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

marvel_Heros.concat(dc_Heros)               //[ 'thor', 'Ironman', 'spiderman' ]

const all_Heros = marvel_Heros.concat(dc_Heros)     //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//=== using spread operator === mostly used to merger two or more arrays

const all_new_heroes = [...marvel_Heros, ...dc_Heros]       //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3, [4,5],6,7,[8,9,0,[10,11]]]

const real_another_array = another_array.flat(Infinity)   //give depth  [
                                                                        //     1,  2, 3, 4, 5,
                                                                        //     6,  7, 8, 9, 0,
                                                                        //    10, 11
                                                                        //  ]

console.log(real_another_array)

console.log(Array.isArray("sonal"))                 //false
console.log(Array.from("Sonal"))                    //[ 'S', 'o', 'n', 'a', 'l' ]
console.log(Array.from({name :"Sonal"}))            //[]


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score1,score2,score3))          //[ 100, 100, 200, 300 ]