// Create a function that takes in an array. If the first number, 
//is less than the last number, alert "Hi". If the first number is 
//greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let ar = [1,2,3,4,5];

const myfunc = (ar)=>{
    if (ar[0] < ar[ar.length -1]){
        alert("hi")}
    else if (ar[0] > ar[ar.length -1]){
        alert("Bye")
    }
    else{
        alert("We close in an hour")
    }
};

myfunc(ar)