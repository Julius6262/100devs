//---Easy
//create a function that subtracts two numbers and alerts the difference

function twoNumbers(num1, num2){
    alert(num1-num2)
}

//create a function that divides three numbers and console logs the quotient

function DthreeNumbers(num1,num2,num3){
    console.log(num1/num2/num3)
}

//create a function that multiplys three numbers and returns the product
function MthreeNumbers(num1,num2,num3){
    return num1*num2*num3
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(num1,num2,num3){
    return (num1 + num2) % num3
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(num1,num2,num3,num4){
    const prod = num1 * num2
    if (prod > 100){
        console.log(prod+num4+num3)
    }
    else if (prod === 100){
        const constant = num1*num2*num3
        alert(constant%num4)
    }
    else{
        console.log(Math.abs(num3-num4))
    }
}