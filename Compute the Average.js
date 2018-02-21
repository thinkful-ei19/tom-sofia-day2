'use strict';

//var numbers = [23, 52, 11, 2, 90, 40, 18, 38];
var numbers = [1, 5];
var total = 0;
numbers.forEach(function(num){
  total += num;
});

console.log(total / numbers.length);