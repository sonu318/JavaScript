const User = {
    _email : "sonal@gmail.com",
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//factory function

const tea = Object.create(User)
console.log(tea.email)