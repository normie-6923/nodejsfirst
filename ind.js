


// const f  = (x)=>{
// return x
// }
// const g = (x)=>{
// return x
// }

// const h = (x)=>{
// return x
// }

// x = 10
// arr = [f(6),g(5),h(4)]

// console.log(arr)

// function co(callback){
//   console.log("1")
//  callback()
// }

// function fo(callback){
//   console.log("2")
//   callback()
// }

// function go(callback){
//   console.log("3")
//   callback()
// }

// x = 1
// const functions = [co,fo,go]

// function fn(x){
// for(let i = functions.length-1; i>=0;i--){
//  const currentfunction =  functions[i]

//  const temp = next;

//  next = currentfunction(temp)}

// }
// fn(x)


// var compose = function(functions) {
//   return function(x) {
//       // Start with the input value
//       for (let i = functions.length - 1; i >= 0; i--) {
//           x = functions[i](x); // Apply each function from last to first
//       }
//       return x; // Return the final result
//   };
// };

// // Example usage:
// const functions = [
//   x => x + 1,  // f1: adds 1
//   x => x * x,  // f2: squares the number
//   x => 2 * x   // f3: doubles the number
// ];

// const fn = compose(functions); // Compose the functions
// const result = fn(4); // Execute the composed function with input 4
// console.log(result);


// function add(a,b){
//   return a+b
// }
// function multwo(val){
//   return val*2
// }
// function square(val){
//   return val*val
// }

// // result = add(4,5)
// // console.log(square(multwo(result)))
// // function compose(fn1,fn2){
// //    return function(a,b){
// // return fn2(fn1(a,b))
// //   }
// // }
// const composeTwo = (fn1,fn2)=>(a,b)=>(fn2(fn1(a,b)))
// const result = composeTwo(add,multwo)
// console.log(result(3,4))



const argumentsLength = function() {
  return arguments.length;
};

console.log(argumentsLength(5)); // Expected output: 1
console.log(argumentsLength({}, null, "3")); // Expected output: 3