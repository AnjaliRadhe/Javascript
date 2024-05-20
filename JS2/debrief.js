let myArr = ["apple", 44, "Green", [2, "Tree"], true]// .length return length

let myStr = true

for (let i = 0; i < myArr.length; i++) {
    // execute this code
    let elem = myArr[i]
    console.log(elem)
}

myArr.push("Annisa")

myArr.forEach(elem => console.log(elem))

let count = 0
while (count < 10) {
    //console.log(count)
    // MUST INCREMENT OR YOU WILL GET AN INFITIE LOOP
    count++
}

console.log(typeof myStr)

/*if (typeof myStr === "string") {
    console.log("You have found a string")
} else if (typeof myStr === "number") {
    console.log("You have found a number")
} else {
    console.log("You have found an unknown data type")
}*/

typeof myStr === "string" ?
    console.log("You have found a string") :
    console.log("You have found an unknown data type")


function logIt(log){
    console.log(log)
    return log
}

const logItArrow = (log) => {
    console.log(log)
}

const myCallBack = function(){
    logIt("Call back function worked!")
}

myArr.forEach(elem => {
    logIt(elem)
})


