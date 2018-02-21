'use strict';


const moves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];


const turtleMove = function (steps) {
  let noBackRight = steps.filter(steps => (steps[0] >= 0 && steps[1] >= 0));
  let turtle = noBackRight.map(noBackRight => (noBackRight[0] + noBackRight[1]));
  turtle.forEach(item => console.log(item));

};

turtleMove(moves);

