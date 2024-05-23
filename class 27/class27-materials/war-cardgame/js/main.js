
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://deckofcardsapi.com/api/deck/m21ldoe6w0mq/draw/?count=2'
  let section = ['#p1War','#p2War']
  section.forEach(sec => {
    let sectionElement = document.getElementById(sec.slice(1));
    if (sectionElement) {
      // Remove existing images
      for (let i = 0; i < 3; i++) {
        let img = document.querySelector('#war' + i);
        if (img) {
          sectionElement.removeChild(img);
        }
      }
    }
  });

  const score = () => {

  }

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if (data.remaining === 0){
          fetch('https://deckofcardsapi.com/api/deck/m21ldoe6w0mq/shuffle/')
        
        }
        console.log(data)
        document.querySelector('#player1-img').src = data.cards[0].image
        let valPlayer1 = data.cards[0].value
        let suitPlayer1 = data.cards[0].suit
        document.querySelector('#player1-text').innerText = `${valPlayer1} OF ${suitPlayer1}`
        
        
        document.querySelector('#player2-img').src = data.cards[1].image
        let valPlayer2 = data.cards[1].value
        let suitPlayer2 = data.cards[1].suit
        document.querySelector('#player2-text').innerText = `${valPlayer2} OF ${suitPlayer2}`

        let royals = {
          'KNIGHT': 11,
          'QUEEN': 12,
          'KING': 13,
          'ACE': 14
        }

        let values = [valPlayer1, valPlayer2]
        for (let l = 0; l < values.length; l++){
          if (values[l] in royals){
            values[l] = royals[values[l]]
          }
        }

        if (valPlayer1 > valPlayer2){
          document.querySelector('#result').innerText = 'Player 1 wins!'
          document.querySelector('#score').innerText = 
        }
        else if (valPlayer1 < valPlayer2){
          document.querySelector('#result').innerText = 'Player 2 wins!'
        }
        else {
          document.querySelector('#result').innerText = 'WAR!!! #¤%&'
          
          section.forEach(sec => {
            let sectionElement = document.getElementById(sec.slice(1));
            for (let i = 0; i < 3; i++) {
              let img = document.createElement('img');
              img.src = 'https://deckofcardsapi.com/static/img/back.png';
              img.id = 'war' + i; // give each img a unique id
              sectionElement.appendChild(img);
            }
          });
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
