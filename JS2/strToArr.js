// ARROW FUNCTION
const logIt = (logs) => {
    console.log(logs)
}

let hi = "hello"

logIt(hi)

// RETURN ARRAY FROM STRING
let splitStr = hi.split('')

// NEW ARRAY AT GLOBAL SCOPE
let revArr = []

// LOOP STRING ARRAY
for (let i = 0; i < splitStr.length; i++) {
    const element = splitStr[i];
    // ADD ELEMENTS TO NEW ARRAY IN REV ORDER
    revArr.unshift(element)
}

logIt(revArr) // LOGS REV ARRAY


// JOIN ELEMENTS OF ARRAY
let newStr = revArr.join("")


logIt(newStr)// LOGS REV STRING


/* CAN YOU TURN THIS 
    INTO A FUNCTION?  */

function revMyStr(str) {
    // AMAZING CODE HERE
}
