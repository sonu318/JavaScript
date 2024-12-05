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

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new User("tea","abc","2")

console.log(tea.encryptPassword())
console.log(tea.changeUsername())