//Create a function that takes in an array of numbers. 
//Return a new array containing every even number from the original array 
//(do not use map or filter)

const myfunc = (arr) => {
    let newar = []
    arr.forEach((i,x) => {
        if (x % 2 === 0){
            newar.push(x)
        }
    });
    return newar
}

const myfunc2 = (arr) => {
    return arr.filter((elem) => elem % 2 === 0)
}

console.log(myfunc([1,2,3,4,5,6,7]))
console.log(myfunc2([1,2,3,4,5,6,7]))