const name = "Sonal"
const age = 22

console.log("Name - "+ name + " age - " + age )

console.log(`My nam is ${name} and my age is ${age}`)

const animeName = new String(`Demon Slayer`)

console.log(animeName)
console.log(animeName[0])               //op = D 
console.log(animeName.length)
console.log(animeName.toUpperCase())
console.log(animeName.charAt(3))
console.log(animeName.indexOf('S'))

const newSubStr =  animeName.substring(1,4)
console.log(newSubStr)

const anotherString = animeName.slice(-8, 5)            // we can give -ve numbers 
console.log(anotherString)


const newString = new String("          Sonal     ")
console.log(newString)
console.log(newString.trim())


const url = "http://sonal%50google.com"

console.log(url.replace('%50','-'))

console.log(url.includes('sonal'))