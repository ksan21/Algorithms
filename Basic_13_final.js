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
// Analyze an array's values and print the average. rite a program that takes an array, and prints the AVERAGE of the values in the array. For example for an array [2, 10, 3], your program should print an average of 5. Again, make sure you come up with a simple base case and write instructions to solve that base case first, then test your instructions for other complicated cases. You can use a count function with this assignment.

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
