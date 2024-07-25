//forin

const myObject = {
    js : 'javascript',
    py : 'python',
    rb : 'ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut of ${myObject[key]}`)
}

const programming = ["cpp" , "java" ,"py" ,"rb"]

for (const key in programming) {
    console.log(programming[key])
}

//cant interator through map
