const name="ctianl"
const age=22

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    //静态方法
    static hw(){
        console.log("Hello,world")
    }
    greet(){
        console.log(
            `${this.name} is saying 'Hi'.`
        )
    }
}

export {name,age,Person}