class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hasnain`
    }

    set password(value){
        this._password = value
    }
}

const hasnain = new User("hasnain@gmail.com", "abc")
console.log(hasnain.password)
console.log(hasnain.email)