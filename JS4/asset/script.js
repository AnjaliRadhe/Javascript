// BIND WINDOW HEIGHT AND WIDTH TO VARIABLES
let height = window.innerHeight
let width = window.innerWidth
// console.log(`Height: ${height}\nWidth: ${width}`)

// RETURN HTML COLLECTION (ARRAY OF ELEMENTS)
let heading = document.getElementsByClassName('heading')
heading[0].textContent = "Hello Team!"
// console.log(heading)

// RETURN HTML COLLECTION (ARRAY OF ELEMENTS) AND LOOP THROUGH
let li = document.getElementsByClassName('list-item')
for (let i = 0; i < li.length; i++) {
    const element = li[i];
    // console.log(element.className)
}
// console.log(li)

// CREATE A NEW CHILD NODE, ADD TEXT AND appendChild TO DOM
let myText = "We had a great weekend with the kids"
let p = document.createElement('p')
p.innerText = myText
// document.body.appendChild(p)

// SELECT SINGLE ELEMENT USING SELECTOR
let hiBtn = document.querySelector('.hi-btn')
function sayHi() {
    alert("hello team!")
}
// hiBtn.addEventListener('click', sayHi)
// hiBtn.addEventListener('click', () =>
// alert("hello team!")
// )
hiBtn.addEventListener('click', sayHi)
// console.log(hiBtn)


// SELECT MULTIPLE ELEMENTS USING SELECTOR AND LOOP
let liQuerry = document.querySelectorAll('.list-item')
for (let i = 0; i < liQuerry.length; i++) {
    const element = liQuerry[i];
    element.addEventListener('mouseover', (event) => {
        let target = event.target
        target.style.backgroundColor = "orange"
    })
    element.addEventListener('mouseout', (event) => {
        let target = event.target
        target.style.backgroundColor = "white"
    })
}
// console.log(liQuerry)

// function runThisFunction()

// myEvent.addEvetListener('click' , (event,name)=>{
// let target = event.target
// let myObj = {
//     name: name
// }
// }))

const getInput = document.querySelector('.get-input')
const output = document.getElementById('output')

console.log(getInput)
console.log(output)

function showInput(input) {
    output.textContent += input
}

showInput("Good morning team!")
getInput.addEventListener('click', ()=> showInput("Good morning team!"))