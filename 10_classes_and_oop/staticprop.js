class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    // Static, It stop to access the method 
    static createId(){
        return `123`
    }
}

const hasnain = new User("hasnain")
// console.log(hasnain.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const info = new Teacher("info", "info@gmail.com")
// info.logMe()
console.log(info.createId());