'use strict';

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

function repeat(fn,n) {
  fn();
  --n && repeat(fn, n);
}

repeat(hello,5);