const myName = "Elias"
let myAge = 44
let myBool = true

let myArr = [myName, myAge, myBool, null] // 4 elements
let mySecondArr = ["apple", 44, "Green", [2, "Tree"], true]
let myThirdArr = ["Peaches", 44, "grass", [2, "Sky"], false, true]

let strArr = []
let numArr = []
let boolArr = []
let unknownArr = []

// function logIt(logThis) {
//     console.log("You have found this => ",logThis)
// }

const logIt = (logThis) => {
    console.log(logThis)
}

function loopArray(arr) {
    //execute this code 

    // loop my arr
    for (let i = 0; i < arr.length; i++) {

        // assign element at each iteration
        const element = arr[i]

        // CHECK FOR DATA TYPE
        switch (typeof element) {
            //STRING
            case 'string':
                // logIt("You have found a string")
                strArr.unshift(element)
                break;
            //NUMBER
            case 'number':
                // logIt("You have found a number")
                numArr.unshift(element)
                break;
            //BOOLEAN
            case 'boolean':
                // logIt("You have found a boolean")
                boolArr.unshift(element)
                break;

            default:
                // logIt("Unknown Value Found!")
                unknownArr.unshift(element)
                break;
        }
    }
}

// EXECUTE ON FIRST ARRAY
loopArray(myArr)

// // EXECUTE ON SECOND ARRAY
loopArray(mySecondArr)

// // EXECUTE ON THIRD ARRAY
loopArray(myThirdArr)


logIt(strArr)
logIt(numArr)
logIt(boolArr)
logIt(unknownArr)
