// for loop 

for(let index=0 ; index <=10 ; index++){
    const element = index
   if(element == 5)
        console.log("5 is best")
    console.log(element)
}

for(let i=0 ; i <=10 ; i++){
    console.log(`outer loop ${i}`)
    for(let j=0 ; j <=10 ; j++)
        console.log(`inner loop ${j} and inner loop value ${i}`)
}

let myArray = ["Flash" , "Batman" , "Ironman"]

for(let i=0 ; i<myArray.length ; i++){
    console.log(`array element  ${myArray[i]}`)
}

for(let i=0;i<=10;i++){
    if(i==5){
        console.log(`detected 5`)
        continue
    }
    console.log(`ele ${i}`)
}
