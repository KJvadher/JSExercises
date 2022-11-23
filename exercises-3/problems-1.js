/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

let output = ''
let n2 = 0
for(let i=0; i<x.length; i++){
    n2 = i + 1;
    if(x[n2] - x[i] > 0){
        output = 'yes, ascending'
    }
    else if(x[n2] - x[i] < 0){
        output = 'yes, descending'
    }
    else{
        output = 'no'
    }
}
console.log(output)

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow