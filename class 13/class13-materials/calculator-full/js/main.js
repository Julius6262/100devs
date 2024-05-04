let expression=""

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', action);

    
    function action(event){
        let buttonValue ='';  // Initialize buttonValue

        if (button.id == "enter"){
            let result = eval(expression);
            document.querySelector('#display').innerHTML = result;
            expression = `${result}`;
        }
        else if (button.id == "numlock"){
            button.classList.toggle('numlock-active');
        }
        else if(button.id =="komma"){
            buttonValue = '.';  // Update buttonValue to '.'
        }
        else{
            buttonValue = event.target.innerText;  // Update buttonValue to the button's innerText
        }
        expression += buttonValue;  // Update the expression with buttonValue
        document.querySelector('#display').innerHTML = expression;
    }
});



