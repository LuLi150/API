
//request => event loop => call stack(1,2,3) => event loop => response

// console.log(1);
// console.log(2);
// console.log(3);

//request => event loop => call stack(1,4) | event queue(3,2) => call stack(1,4,3,2) => response
// console.log(1);
// setTimeout(() => console.log(2),3000);
// setTimeout(() => console.log(3),2000);
// console.log(4)


