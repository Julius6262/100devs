//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const sq = (ar) =>{
    return ar.map((el)=> el**2)
}
console.log(sq([4,5,6]))
//Create a function that takes string
//Print the reverse of that string to the console

const reverse = (str) => {
    return str.split('').reverse().join('')
}

console.log(reverse("hello"))
//Create a function that takes in a string
//Alert if the string is a palindrome or not

const pali = (str) => {
    if (str === reverse(str)){
        alert("palidrome")
    }
}

pali("elle")