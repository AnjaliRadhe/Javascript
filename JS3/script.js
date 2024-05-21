let myObj = {
    "first name" : "Lucy",
    lname: "Lou",
    myArr: [1,2,3,4],
    sayHi: function(){
        return `Hello from ${this["first name"]} ${this.lname}`
    }
}
myObj["first name"] = "Jamie"
let firstName = myObj["first name"]
let lastName = myObj.lname
console.log(myObj["first name"])
console.log(myObj.sayHi())

let myArrObjs = [
    {"first name" : "Lucy", lname: "Lou", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}},
    {"first name" : "Adam", lname: "Han", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}},
    {"first name" : "Linda", lname: "London", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}},
    {"first name" : "Amy", lname: "Louise", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}},
    {"first name" : "John", lname: "Smith", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}}
]

for (let i = 0; i < myArrObjs.length; i++) {
    const element = myArrObjs[i];
    console.log(element['first name'])
}

for (const elem in myArrObjs) {
    const element = myArrObjs[elem]
    console.log(elem)
    console.log(element.lname)
}

for (const key of myArrObjs) {
    console.log(`Hello from ${key['first name']} ${key.lname}`)
    console.log(key.sayHi())
}
