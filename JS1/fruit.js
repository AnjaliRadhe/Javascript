let myFruit
myFruit = "apple"
// myFruit = "pear"
// myFruit = "dragon fruit"

let myFruitBasket = ["apple", "pear", "dragon fruit"] // 0, 1, 2 

myFruit === myFruitBasket[1] ?
    console.log("You have a apple") : //truthy
    console.log("This is not an apple") //falsey

switch (myFruit) {
    case myFruitBasket[1]:
        // execute this code block
        console.log("You have a pear")
        break;
    case myFruitBasket[0]:
        // execute this code block
        console.log("You have an apple")
        break;
    default:
        console.log("I dont know this fruit")
        break;
}

