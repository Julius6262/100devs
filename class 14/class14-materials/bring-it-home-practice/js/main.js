// *Variables*
// Create a variable and console log the value


// Create a variable, add 10 to it, and alert the value

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(num1,num2,num3,num4){
    alert(num1-num2-num3-num4)
}

sub(1,2,3,4)
// Create a function that divides one number by another and returns the remainder

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function bigger(num1, num2){
    if (num1+num2 > 50){
        alert("Jumanji")
    }
}

bigger(20,26)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function complex(num1, num2, num3){
    const product = num1*num2*num3
    if ((product % 3) === 0){
        console.log("Zebra")
    }
}

complex(2,3,2)