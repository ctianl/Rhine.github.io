let name="Jack"
let age=19

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    static hw(){
        return "Hello,world."
    }
    eat(){
        console.log(`${this.name} is eating something.`)
    }
}

export {name,age,Person}