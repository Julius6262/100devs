//Create a function that grabs the number of snacks 
//from the input and tells you to stop that many times

function howMany(){
    document.querySelector('#help').addEventListener('click', times)
     
}

function times(){
    const time =  document.querySelector('input').value
    console.log(time)

    display(time)
}


function display(time){
    parent = document.querySelector('#stops')
    
    for (i= 0; i <= time; i++){
        let newElement = document.createElement('h3');
        newElement.innerText = time
        parent.appendChild(newElement);  
    }
    
    for (i= 0; i <= time; i++){
        document.querySelector('#stops').innerText += ` ${time} `
    }
    
    document.querySelector('input').value = ""
}

howMany()