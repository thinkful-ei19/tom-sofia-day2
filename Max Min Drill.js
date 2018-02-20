/* max and min (without sort)
To complete this drill, you need to implement 2 functions, max and min.Both functions should take a single argument: an array of numbers called numbers.max(numbers) should return the largest number in the array, while min(numbers) should return the smallest.

Assume that the numbers input only contains numbers(that is, you don't have to inspect your inputs to confirm they only contain numbers).

If the numbers array is empty, then both max and min should return null or undefined, whichever is more convenient.

Finally, note that you are not allowed to use JavaScript's sort method, which provides a simple-but-inefficient way to solve this problem (simply sort the array and return either the first or last element, depending on if you need min or max). Also, for obvious reasons, you are not allowed to use Math.max or Math.min.

Redo the "max and min (without sort or Math.max/min)" drill but this time use a while loop instead of a for loop
Redo "Compute the average" exercise but use the Array.forEach() method instead of a for loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

*/
'use strict';

const numbers = [1,2,3,4,5,6,7];

function max(numbers) {
  let max = numbers[0];
  let currentNum = 0;
  while (currentNum < numbers.length) {
    if (numbers[currentNum] > max) {
      max = numbers[currentNum];
    }
    currentNum++;
  }
  return max;
}
console.log(max(numbers));