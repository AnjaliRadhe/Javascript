let myArrObjs = [
    {"first name" : "Lucy", lname: "Lou", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}},
    {"first name" : "Adam", lname: "Han", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}},
    {"first name" : "Linda", lname: "London", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}},
    {"first name" : "Amy", lname: "Louise", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}},
    {"first name" : "John", lname: "Smith", sayHi: function(){return `Hello from ${this["first name"]} ${this.lname}`}}
]

// FUNCTION TO EXPORT
function add(n1, n2) {
    let result = n1 + n2
    console.log(result)
    return result
}

exports.add = add
exports.myArr = myArrObjs