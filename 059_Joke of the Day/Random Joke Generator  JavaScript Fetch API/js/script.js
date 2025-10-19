const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke)

button.addEventListener('click', getJoke);

/*
function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    // console.log(jokeData)
    console.log(jokeObj)
}
*/

/* async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    // console.log(jokeData)
    // console.log(jokeObj.joke)
    jokeText.innerHTML = jokeObj.joke;
} */

function getJoke() {
    fetch('https:/icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        }).then(data => data.json())
        .then(obj => jokeText.innerHTML = obj.joke)
}