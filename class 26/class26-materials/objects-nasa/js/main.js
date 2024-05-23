//The user will enter a date. Use that date to get the NASA picture of the day from 
//that date! https://api.nasa.gov/
//Make the NASA API handle all the data types including video


let baseURL = `https://api.nasa.gov/planetary/apod?api_key=9C2LHp8JmNhP5ccSMgR3FO6A81mfabmboFSon0ZQ`

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=9C2LHp8JmNhP5ccSMgR3FO6A81mfabmboFSon0ZQ')
        .then(res => res.json())
        .then(data => {
        console.log(data)
        })

        .catch(err =>{
            console.log(err)
        })
}