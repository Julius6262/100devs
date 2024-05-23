//Create a button that adds 1 to a botScore stored in localStorage 

localStorage.setItem('botScore', 0)

document.querySelector('button').addEventListener('click',change)

function change(){
    let count = Number(localStorage.getItem('botScore'))
    count += 1
    localStorage.setItem('botScore', count)
}
