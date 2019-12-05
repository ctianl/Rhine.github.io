const name="ctianl"
const age=22
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    hw(){
        console.log("Hello,world!")
    }
    static eat(){
        console.log("This person is eating something.")
    }
}
export {name,age,Person}