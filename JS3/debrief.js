const person = {
    name: "Elias",
    age: 44,
    height: 178,
    sayHi: function(){
        return `Hello from ${this.name}`
    }
}

class Person{
    constructor(name, age, height){
        this.name = name
        this.age = age
        this.height = height
        this.friends = []
        this.id = 0
    }
    addFriend(name, age, height){
        let newFriend = {
            id: this.id++,
            name: name,
            age: age,
            height: height
        }
        this.friends.push(newFriend)
        console.log(this.friends)
    }
}

let myArr = new Array()
let myDate = new Date()

let adam = new Person("Adam", 23, 176)
let abby = new Person("aby", 29, 167)

abby.name = "Abby"

// add friends to adams array
adam.addFriend("Abby", 29, 167)
adam.addFriend("Joe", 35, 147)

// add friends to abbys array
abby.addFriend("Adam", 23, 176)
abby.addFriend("Joe", 35, 147)

console.log(adam)
console.log(abby)
console.log(abby.name)