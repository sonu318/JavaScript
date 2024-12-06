const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')

console.log(descriptor)

const chai = {
    name  : "ginger chai",
    price : 250,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"))          //output {
                                                                            //     value: 'ginger chai',
                                                                            //     writable: true,
                                                                            //     enumerable: true,
                                                                            //     configurable: true
                                                                            // }


Object.defineProperty(chai,"name",{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai , "name")) 


for(let [key , value] of Object.entries(chai) ){
    if(typeof key !== 'function'){
        console.log(`${key} , ${value}`)
    }
}
