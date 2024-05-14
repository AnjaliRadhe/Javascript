const myName = "Elias"
let myAge = 44

let myBool = true

let myStr = `Hello,\nmy name is ${myName}\nMy age is ${myAge}`
let falseStr = `The boolean value was ${!myBool}`


myBool ?
    console.log(myStr) :
    console.log(falseStr)

