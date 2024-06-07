let users = 'https://jsonplaceholder.typicode.com/users'
let posts = 'https://jsonplaceholder.typicode.com/posts'
let post = 'https://jsonplaceholder.typicode.com/posts/1'

// default is GET
function getThis(url) {
    fetch(url)
        .then(res => res.json())// return json
        .then(data => console.log(data))// output data
        .catch(err => console.error(err))// catch errors}
}

function postThis(url) {
    fetch(url, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            name: "Abby",
            email: "abby@email.com"
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}


function deleteThis(url) {
    fetch(url, {
        "method": "DELETE"
    })
        .then(console.log("Entry was deleted"))
        .catch(err => console.log(err))
}


function putThis(url) {
    fetch(url, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "title": "The title has changed!",
            "body": "The body has been updated"
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

function patchThis(url) {
    fetch(url, {
        "method": "PATCH",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "title": "The title has changed!",
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}


patchThis(post)
