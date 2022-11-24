/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/
function isSortedAndHow(nums) {
    var isDescending = true;
    var isAscending = true;
    let output = ''
  
    for (var i=0; i<nums.length-1; i++){
       isDescending = isDescending && (nums[i] > nums[i+1]);
       isAscending = isAscending && (nums[i] < nums[i+1]);
    }
    
    if (isAscending)
    {
      output = 'yes, ascending';
    }
    else if (isDescending) 
    {
        output = 'yes, descending';
    }
    else
    {
        output = 'no';
    }
    return output
}


// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow