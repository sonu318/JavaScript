class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(password){
        this._password = password.toUpperCase()
    }

    get email(){
        return this._email
    }

    set email(value){
        this._email = value
    }
}

const sonal = new User('sonal@gmail.com' , '123a')
console.log(sonal.password)