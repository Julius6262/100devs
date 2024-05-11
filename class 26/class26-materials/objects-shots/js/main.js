//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const func = () => {
  let val = document.querySelector('input').value;
  
  let completeUrl = baseUrl + val;

  fetch(completeUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data.drinks)
        const name = data.drinks[0].strDrink
        const instructions = data.drinks[0].strInstructions
        const drinkImg = data.drinks[0].strDrinkThumb

        document.querySelector('h2').innerText = `Name: ${name}`
        document.querySelector('h3').innerText = `Instructions: ${instructions}`
        document.querySelector('img').src = drinkImg
    })
    .catch(error => {
      console.log(`error ${error}`);
    });
}

document.querySelector('button').addEventListener("click", func);
