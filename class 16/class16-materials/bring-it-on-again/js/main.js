// *Variables*
// Declare a variable, assign it a value, and alert the value

// Create a variable, divide it by 10, and console log the value

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function thisIs(num1,num2,num){
    alert(num1*num2*num3)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function another(num1, num2, num3, num4){
    console.log(num1+num2)
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function condi(num1,num2,num3){
    const result = (100+num1 -num2)/num3
    if (result > 25){
        console.log("win")
    }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function fun(day){
    const week = ["monday", "tuesday", "wendsday", "thursday", "friday"]
    day = day.toLowerCase()
    if (day === "sunday" || day === "saturday"){
        alert("weekend")
    }
    else if (week.includes(day)) {
        alert("week day")
    }
    else{
        alert("try again")
    }
}

fun('monday');
//*Loops*
//Create a function that takes in a number. 
//Console log all values from 1 to that number or greater, but count by 3
function myNum(num){
    for (let i = 1; i <= num; i+=3){
        console.log(i)
    }
}

myNum(15)