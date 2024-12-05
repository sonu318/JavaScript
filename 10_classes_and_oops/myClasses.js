class User {
    constructor(username,password,id){
        this.username = username
        this.password = password
        this.id = id
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("sonal","123","1")

console.log(chai.encryptPassword())
console.log(chai.changeUsername())