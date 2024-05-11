//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        //create a h4 element for each drink in the array
        data.drinks.forEach(drink => {
          let h4 = document.createElement('h4')
          h4.textContent = drink.strDrink
          document.body.appendChild(h4, document.querySelector('body'))
        });

        
        let h4Elements = document.querySelectorAll('h4')  // get a list of all h4, to select one based on index
        let i = 0; // Initialize counter
        let max = data.drinks.length; // Maximum number of iterations

        // every 3 second display a new drink
        function loop() {
            if (i < max) {
              document.querySelector('h2').innerText = data.drinks[i].strDrink
              document.querySelector('h3').innerText = data.drinks[i].strInstructions
              document.querySelector('img').src = data.drinks[i].strDrinkThumb
              
              setTimeout(loop, 3000); // Call loop again after 3 seconds

              // add and remove to make sure only one index is highlighted
              h4Elements[i].classList.add('highlight')
              if (i >= 1){
                h4Elements[i-1].classList.remove('highlight')
              }
              i++;
            }
        }

        loop(); // Start the loop
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}