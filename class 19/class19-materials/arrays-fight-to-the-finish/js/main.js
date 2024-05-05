//Create an array of movie titles. Loop through the array and each element to the h2.
let ar = ["mov1","mov2","mov3","mov4"];

for (let i = 0; i < ar.length; i++){
    document.querySelector('h2').innerText = ar[i]
};
//Create an array of numbers. Loop through the array and three to each number and 
//replace the old number.
let ar3 = [1,2,3,4,5];

ar3.forEach((i,x) => {
    ar3[i]= i+1
    
});

//Find the average of all the numbers from question three
arr[1,2,3,4,5];
let sum = 0;
arr.forEach((i,x) => {
    sum += x
});

console.log(sum/arr.length);