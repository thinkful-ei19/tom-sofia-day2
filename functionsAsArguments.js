function hello(){
    console.log("Hello World!");
}

function goodbye(){
    console.log("Goodbye World!");
}

function repeat(fn, n){
fn();
   --n && repeat(fn, n);
}

console.log(repeat(hello, 5));
console.log(repeat(goodbye, 5));