//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 

const orginalList = ['1','2','3']

function reverseList(oL){
    revL = []
    for (let i = oL.length-1; i >= 0; i--){
        revL.push(oL[i])
    }
    return revL
}

console.log(reverseList(orginalList))

// or originalList.reverse()

//Given two integer arrays a, b, both of length >= 1, create a program that 
//returns true if the sum of the squares of each element in a is strictly 
//greater than the sum of the cubes of each element in b.


//Return a new array consisting of elements which are multiple of their own index in 
//input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multiple(arr){
    return arr.filter((e,i) => e % i === 0 )
}

console.log(multiple([22, -6, 32, 82, 9, 25]))
//Given an array of integers as strings and numbers, return the sum of the array values
// as if all were numbers.Return your answer as a number.

const strNum = [1,'2',3,'4']
let sum = 0
for (let i = 0; i < strNum.length; i++){
    sum += Number(strNum[i])
}

console.log(sum)

let num = strNum.reduce((prev,cur) => Number(prev) + Number(cur))

console.log(num)