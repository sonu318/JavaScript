console.log(2 > 1)
console.log(1>2)

console.log("2" > 1)          // js consider string to number in comparison  //true
console.log("02" < 1)         //false


console.log(true >= 0)
console.log(false >= 0)

console.log(null > 0)           //false
console.log(null == 0)          //false
console.log(null >=0)           //true
//the reason is that an equality check == and comparisons >< >= <= work differently 
//comparions convert null to a number , treating it as a 0 
// thats why null>=0 is true and null>0 is false

console.log(undefined == 0)         //false
console.log(undefined >= 0)         //false
console.log(undefined < 0)          //false


//  ===              used to strictly check equality

console.log("2" === 2)     //false bcz datatype is diff