const name="Jiuer"
const age=17

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    static eat(){
        return `This person is eating something.`
    }
    hw(){
        return `${this.name} is saying 'Hello,world.'`
    }
}

export {name,age,Person}