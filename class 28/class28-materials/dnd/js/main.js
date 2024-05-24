//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.name)
        //create element
        const spellName = document.createElement('h3')
        // set the text
        spellName.innerText = data.name 

        // place it correctly to be shown
        document.querySelector('#spellName').appendChild(spellName)

       console.log(data.classes[0].name) // class

       //create a new element
       const classH4 = document.createElement('h4')

        // set the text inside the new element
        classH4.innerText = data.classes[0].name

        // append the element to the correct section and show it in the dom
       document.querySelector('#class').appendChild(classH4)
       
       console.log(data.subclasses)
       data.subclasses.forEach((element,i) => {
        //create a new element
       const subClassH5 = document.createElement('h5')

       //give the element text
       subClassH5.innerText = element[i].name

       //show the newelement in the dom and place it correctly
       document.querySelector('#subClass').appendChild(subClassH5)
       });
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

