//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const sumOf = () =>{
    let ar = [1,2,3,4,5,6]

    let sum = 0
    ar.forEach((a)=>{
        sum +=a
    })
    alert(sum)
}
sumOf()

const anotherSum = (ar) =>{
    return  ar.reduce((acc, cur) => acc+ cur, 0)
}

console.log(anotherSum([1,23,4,56,7,6]))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const eqNum = (ar) => {
    const sq = ar.map((val) => Math.sqrt(val));
    return sq;
}

console.log(eqNum([5,6,7,8,9,0]))

//Create a function that takes string
//Print the reverse of that string to the console

const reverse = (str) => {
    return str.split('').reverse().join('')
}
console.log(reverse('hello'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const panlindrome = (str) => {
    if (str === str.split('').reverse().join('')){
        alert("palindrome")
    }
    else{
        alert("not palindrome")
    }
}

console.log(panlindrome("helle"))