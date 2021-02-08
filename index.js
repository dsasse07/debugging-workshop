document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  let username = document.getElementById('name-input').value
  let joke;
  
  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => renderJoke(jokeData.joke) )
  }

  const renderJoke = jokeText => {
    joke = jokeText
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
  }
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    username = document.getElementById('name-input').value
    if(username === "") return;
    fetchJoke()
    
  })
})
