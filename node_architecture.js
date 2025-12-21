//blocking operation ---> synchronous
const fs = require('fs');
// console.log("1");       //prints first as it is 1st statement
// const result = fs.readFileSync('contact.txt',"utf-8");   //blocks here
// console.log(result);    //here file blocks, completes it's execution then allows others to print
// console.log("2");       //prints after reading file


//non-blocking operation ---> asynchronous
console.log("1");
fs.readFile("contact.txt","utf-8", (err,result) => {
    console.log(result);   //once the result gets ready for the file, 
                           // it gets printed, it doesn't blocks
})
console.log("2");
console.log("3");


