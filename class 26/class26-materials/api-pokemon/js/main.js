//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // clear the section if anything there
        document.querySelector('section').innerHTML = '';

        data.abilities.forEach(element => {
          let parentElement = document.querySelector('section');
          let newElement = document.createElement('h4');
          newElement.textContent = `${element.ability.name}`;
          document.querySelector('section').appendChild(newElement);  
        });
        
        document.querySelector('h2').innerText = `Name: ${data.forms[0].name}`
        document.querySelector('img').src = data.sprites.back_default

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}