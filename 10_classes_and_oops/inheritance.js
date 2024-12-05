class User{
    constructer(username){
        this.username = username
    }

    logMe(){
        console.log(`User name is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`this course is added by ${this.username}`)
    }
}

const chai = new Teacher("chai" , "chai@gmail.com" , 123)

chai.addCourse()