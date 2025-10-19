// document.getElementById('btn').addEventListener("click", displayMovieData)

fetch("https://www.omdbapi.com/?t=soul&apikey=566818b5")
    .then(response => response.json())
    .then(data => console.log(data))