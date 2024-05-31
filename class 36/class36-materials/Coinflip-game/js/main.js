document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const select = document.querySelector("#select").value;
  const res = await fetch(`/api?guess=${select}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#resultCoinFlip").textContent = data.coinFlip
  document.querySelector('#resultWin').textContent = data.win ? 'You win!' : 'You lose';

  const resultWin = document.querySelector('#resultWin')

  if (data.win){
    resultWin.classList.add("win")
  }else{
    resultWin.classList.remove('win')
  }
  
}