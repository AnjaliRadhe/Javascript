// ARRAY
let myArr = ["Elias", 44, true, false, null] // 4 elements

// ARRAY OF ARRAYS
let myArrOfArrs = [
    ["Elias", 44, true, false, null],
    ["Vanessa", 42, true, false, null],
    ["Liam", 41, true, false, null],
    ["Wendy", 43, true, false, null]
]

// ARRAY OF NUMBER ARRAYS
let myArrOfNumArrs = [
    [23, 44, 11, 47, 25],
    [76, 42, 12, 74, 19],
    [8, 41, 14, 82, 42],
    [24, 43, 17, 85, 85]
]

// 2D ITERATOR
// myArrOfArrs.forEach(elem => {
//     elem.forEach(innerElem => console.log(innerElem))
// })

// OBJECT
let myOBJ = {
    name: "Elias",
    age: 44,
    bool: {
        true: true,
        false: false
    },
    none: [null, undefined, null, false]
}

// REASIGN OBJECT VALUE USING KEY
myOBJ.name = "Lucas"
// OUTPUT VALUE FROM KEY
console.log(`Hello my name is ${myOBJ.name}`)

// ARRAY OF OBJECTS
let myArrOBJS = [
    { name: "A long name", age: 22, bool: true },
    { name: "No name", age: 22, bool: true },
    { name: "No funny name", age: 22, bool: true },
    { name: "A name", age: 22, bool: true },
    { name: "A funny name", age: 22, bool: true },
    { name: "A name", age: 22, bool: true }
]

// FOREACH ITERATOR
myArr.forEach(
    function (elem, index) {
        console.log(index, elem)
    }
)
// ARROW CALLBACK FUNCTION
myArr.forEach(
    (elem, index) => {
        console.log(index, elem)
    }
)

// RETURN NEW ARRAY BUT DOESNT MANIPULATE
let thisHere = myArr.map((elem, index) => {
    console.log(index, elem)
    return elem
})

// MANIPULATE AND RETURN NEW ARRAY
// RETURNS NEW ARRAY WITH NO "ELIAS" ELEMENT
let newElem = myArr.filter(elem => elem !== "Elias")
// RETURNS NEW ARRAY WITH NO TYPE OF BOOLEAN ELEMENTS
let newElems = myArr.filter(elem => typeof elem !== 'boolean')

console.log(newElem)
console.log(newElems)

// MAP METHOD TO ITERATE AND UNPACK OBJECT KEY:VALUE
myArrOBJS.map((elem, index) => {
    console.log(elem.name, elem.age, elem.bool)
    return elem
})


let thisAmount = myArrOfNumArrs[1].reduce((a,b)=> {
    console.log(a+b)
    return a+b
})

console.log(thisAmount)