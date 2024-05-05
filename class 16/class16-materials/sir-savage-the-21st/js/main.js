//Create a function that has a loop that prints '21' 21 times to the console and then call that function

function twentyone(){
    for (i = 1; i < 22; i++){
        console.log(i)
    }
}

twentyone()

//Bonus can you make it print '21' 21 times to the dom?

const parent = document.querySelector('section');

function twentyones() {
    for (let i = 1; i <= 21; i++) {
        let newElement = document.createElement('h3');
        newElement.innerHTML = i;
        parent.appendChild(newElement);
    }
}

twentyones();
