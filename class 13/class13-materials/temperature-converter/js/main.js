//Write your pseduo code first! 
/* 

somewhere to write the temperature to converte

a buttion to submit it

pull that number from the input to the javascript

convert it by multipling it

display it to the user */

document.querySelector('#button').addEventListener('click', displayTemperature)

function getData(){
    const celsius = document.querySelector('#temp').value
    return (celsius)
}

function convertTemperature(celsius){
    const fahrenheit = (celsius * (9/5)) + 32
    return (fahrenheit)
}

function displayTemperature(){
    celsius = getData()
    fahrenheit = convertTemperature(celsius)
    document.querySelector('#display').innerHTML = `${fahrenheit} °F`
}
