const buttonSection = document.querySelectorAll('.buttons');

let calculator = (curVal) => eval(curVal)

let curVal = ""
buttonSection.forEach((section) => {
    section.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            let butVal = event.target.innerText;
            if (butVal === "x") {
                butVal = "*";
            }
            
            curVal += butVal;
            document.querySelector('#display').innerText = butVal;
            
            if (butVal === "="){
                // Remove the trailing "=" from curVal before evaluating
                let result = calculator(curVal.slice(0, -1));
                document.querySelector('#display').innerText = result;
                curVal = result.toString(); // Convert result back to string for further calculations
            }
        }
    });
});


