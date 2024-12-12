class User{
    constructor(email,password){
        this.email = email
        this.password = password

    }
}

const sonal = new User('sonal@gmail.com' , '123a')
console.log(sonal.password)