// ENDPOINTS FOR GET METHOD
let users = 'https://jsonplaceholder.typicode.com/users'
let posts = 'https://jsonplaceholder.typicode.com/posts'

// PROMISE BASED
fetch(users)
    .then(response => {
        console.log(response)
        if (response.ok) {
            return response.json()
        }
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element)
        }
    })
    .catch(err => console.error(err.message))

// ASYNC FUNCTION
async function getRequest(url){
    let req = await fetch(url)
    console.log(req)
    if(req.ok){
        let data = await req.json()
        console.log(data)
    }
}
getRequest(posts)

// PROMISE HANDLERS
// SUCCESS
function partyAtPark(invite){
    console.log(invite)
}
//REJECT
function partyAtApartment(invite){
    console.log(invite)
}

let isRaining = true
let sunnyDay = !isRaining ? false : true
// GLOBAL TEXT
let text = ''

// CREATE WEATHER PROMISE OBJECT
const weather = new Promise(function(resolve, reject){
    if(sunnyDay) {
        let party = {
            location: "Centenial Park",
            time: 11,
            invite: function(){
                text = `Please come to my party\n${this.location} at ${this.time}am`
                return text
            }
        }
        resolve(party.invite())
    } else {
        let party = {
            location: "My Apartment",
            time: 3,
            invite: function(){
                text = `Please come to my party\n${this.location} at ${this.time}pm`
                return text
            }
        }
        reject(party.invite())
    }
})

// CONSUME PROMISE AND PASS HANDLER FUNCTIONS
weather
    .then(partyAtPark)
    .catch(partyAtApartment)


/* HAPPY CODING :) */
