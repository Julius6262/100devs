//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
// if localstorage is empty !null = true, set it to ""
if (!localStorage.getItem('allTitles')){
  localStorage.setItem('allTitles',"")
  
// else show what is in allTitles in localstorage
}else {
  let collectTitles = localStorage.getItem('allTitles')
        let arr = collectTitles.split(';')
        if (arr.length !== 0){
          arr.forEach((el,i) => {
            const t = document.createElement('h3')
            t.textContent = el
            document.querySelector('section').appendChild(t)
          }

          )
        }
}

function getFetch(){
  const choice = document.querySelector('input').value

  // filter for only numbers
  let numChoice = ""
        for (let i= 0; i < choice.length; i++){
          if(choice[i] >= "0" && choice[i] <= "9"){
            numChoice += choice[i]
          }
        }

  const url = `https://openlibrary.org/api/volumes/brief/isbn/${numChoice}.json`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const records = data.records;
        const recordKey = Object.keys(records)[0]; // Get the first key in the records object
        const record = records[recordKey];
        const title = record.data.title;
        console.log(title)
        
        // change the value in localstorage
        let collectTitles = localStorage.getItem('allTitles')
        collectTitles += `${title};`
        localStorage.setItem('allTitles',collectTitles)
    
        // remove the "" at the end for the array
        let arr = collectTitles.split(';').filter(el => el !== "")
        console.log(arr)

        // remove the HTML within the section, to not have the same value multiple times
        document.querySelector('section').innerHTML = ""
        //create 
        if (arr.length !== 0){
          arr.forEach((el,i) => {
            
            const t = document.createElement('h3')
            t.textContent = el
            document.querySelector('section').appendChild(t)
          }

          )
        }
        
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

