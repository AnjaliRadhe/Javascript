const myName = "Elias"
let myAge = 45
console.log(typeof myAge)
let myAgeStr = "44"
console.log(typeof myAgeStr)
let myNumber = 10
let eatsSpicyFood = true
/*
FIND VARIABLE TYPES
*/
let typeOfMyName = (typeof myName)
let typeOfMyAge = (typeof myAge)
let typeOfMyAgeStr = (typeof myAgeStr)


if (myName === "Elias") {
    console.log("Hello " + myName)
}

// TESTING IF VALUE IN VARIABLE IS LESS THAN 43
if (myAge <= 43) {
    /*IF THIS CONDITION IS MET
    EXECUTE THIS CODE*/
    console.log("You are younger than 43!")
} else if (myAge === 44) { // TESING IF VARIABLE IS EQUAL TO TYPE AND VALUE TO 44
    /*IF THIS CONDITION IS MET
        EXECUTE THIS CODE*/
    console.log("You are 44!")
} else {
    /* EXECUTE THIS CODE for all other cases*/
    console.log("You are over 44!")
}


/*if (eatsSpicyFood) {
    // execute this code
    let myStatement = `${myName} like to eat chilli`
    console.log(myStatement)
} else {
    // execute this code
    let myStatement = `${myName} does not like to eat chilli`
    console.log(myStatement)
}*/

/*!eatsSpicyFood ? 
/* truthy */ /*console.log(`${myName} like to eat chilli`) : */
/* falsey */ /*console.log(`${myName} does not like to eat chilli`) */