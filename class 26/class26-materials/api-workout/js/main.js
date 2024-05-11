/*//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
// Your permanent token
let username = 'jo.ju.martin@gmail.com';
let password = 's:Uc8XP5eB3a!57';

fetch('https://wger.de/api/v2/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({username: username, password: password})
})
.then(response => response.json())
.then(data => {
  console.log(data);
  let accessToken = data.access;
  let refreshToken = data.refresh;

  // Start the second fetch request here
  let workoutUrl = 'https://wger.de/api/v2/workout/';

  fetch(workoutUrl, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Refresh the token here
    fetch('https://wger.de/api/v2/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({refresh: refreshToken})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let newAccessToken = data['access'];
      // Use the new access token for subsequent requests
    })
    .catch(err => console.log(`error ${err}`));
  })
  .catch(err => console.log(`error ${err}`));
})
.catch(err => console.log(`error ${err}`));

