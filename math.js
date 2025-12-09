//from here modular code is divided into two parts!
//without exporting this 'math.js' module, this is just a private function, after exporting this module, it will become publicly accessible
// function add(a,b){
//      return a+b;
//  }
 //we can have more arithmetic operators within one file
// function sub(a,b){
//      return a-b;
//  }

//module export statement
// module.exports = "Khushi"; //this is just an example -> this function represents entire 'hello.js' file

//changing value of module.exports to 'add'
//this returns function as 'add' -> [Function: add]
//'add' function exported from here got imported into 'hello.js' file -> o/p: 7
// module.exports = add;
// 'sub' overrides 'add' over here   -> o/p: -2
// module.exports = sub;

//we can handle overriding, by using JS objects
// module.exports = {add, sub}  -> it's an object/ destructuring

//we can also export using 'exports' object, known for multiple exports, as we can use 'module.export' only once because it overrides the value
//this will be anonymous function
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;
