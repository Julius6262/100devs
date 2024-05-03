document.querySelector('#check').addEventListener('click', check)

function check (){
  const day = document.querySelector('#day').value

  const lowerCaseDay = day.toLowerCase()
  if(lowerCaseDay === "tuesday" || lowerCaseDay ==="thursday"){
    alert("coding day")
  }
  else if (lowerCaseDay === "wendsday" || lowerCaseDay === "monday"){
    alert("boring day")
  }
  else {
    alert("It's weekend")
  }
}

document.querySelector('#day').addEventListener('input', displayText)

function displayText (event){
  const text = event.target.value;  
  document.querySelector('#placeToSee').innerHTML = text;
}