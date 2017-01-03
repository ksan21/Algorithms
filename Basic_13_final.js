// Print 1 - 255
// Print all the integers from 1 to 255

for (var i = 1; i <= 255; i ++){
 console.log(i);
}

// Print Odds 1 - 255
// Print all odd integers from 1 to 255

for (var i = 1; i < 256; i +=2){
    console.log(i);
}

// Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far

var counter = 0;
for (var i = 0; i <=255; i++){
  counter = i + counter;
  console.log("New number: " , i, " Sum: " , (counter));
}
// New Number: 255 SUM: 32640

// Iterate and Print Array
// Iterate through a given array, printing each value

var arr = [2,3,4,8];
for (var i = 0; i < arr.length; i ++){
  console.log(arr[i])
}
// Find and Print Max
// Given an array, find and print it's largest element

var arr = [10,12,18,3,-1,"tiger"]
var max = arr[0];
for (var i = 0; i < arr.length; i ++){
  if (arr[i] > max){
    max = arr[i];
  }
}
console.log(max);

// Get and Print Average
// Analyze an array's values and print the average. write a program that takes an array, and prints the AVERAGE of the values in the array. For example for an array [2, 10, 3], your program should print an average of 5. Again, make sure you come up with a simple base case and write instructions to solve that base case first, then test your instructions for other complicated cases. You can use a count function with this assignment.

var arr = [2,4,6,20,100]
var sum = 0;
var len = arr.length
 for (var i = 0; i < arr.length; i ++){
   sum += arr[i];
 }
console.log(sum/len);

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive)

var arr = [];
for (var i = 1; i <= 255; i +=2){
  arr.push(i);
}
console.log(arr);

// Square the values
// Square each value in a given array, returning that same array with changed values.

var arr = [0,1,2,4,8,10,3,-2];
for (var i = 0; i < arr.length; i ++){
  arr[i] = arr[i] * arr[i];
}
console.log(arr);

// [0,1,4,16,64,100,9,4]

// Greater than Y
// Given an array and a value Y, count and print the number of array values greater than Y. For example if array = [1, 3, 5, 7] and y = 3, after your program is run it will print 2 (since there are two values in the array that are greater than 3).

var arr = [1,3,5,7];
var y = 2;
var count = 0;

for (var i = 0; i < arr.length; i ++){
    if (arr[i] > y){
        count ++;
    }
}
console.log(count);

// 3

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero. IE given array [0,-4,-6,12,8], array should return [0,12,8].

var arr = [-2,0,1,7,-3,9];
for (var i = 0; i < arr.length; i ++){
  if (arr[i] < 0){
    arr[i] = 0;
  }
}
console.log(arr);

// [0,0,1,7,0,9]
