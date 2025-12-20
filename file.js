//file handling in Node.js

//syntax for interacting with file system
const fs = require("fs");   //import statement

//to create a file inside node.js    //synchronous
// fs.writeFileSync("./test.txt", "Hey Khushi");

//if we change content inside code -> fs.writeFileSync("./test.txt", "Hey world"), it updates test.txt content from Hello Khushi -> Hello world
//fs.writeFileSync("./test.txt", "Hey world");

//asynchronous
// fs.writeFileSync("./test.txt", "Hey Khushi Async", (err)=> {
// });

//to read a file inside node.js   //synchronous
//when we use synchronous task, it gives result in a variable
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

//asynchronous
// fs.readFile("./contact.txt","utf-8",(err, result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// })

//to append current date in file
//changes made inside test.txt file, appended current date in last
//it doesn't overrides data in file
// const result = fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// console.log(result);

//to append in new line
// fs.appendFileSync("./test.txt","Hey Khushi\n");

//to copy a file
// fs.cpSync("./test.txt", "./copy.txt");

//to add date and time inside file
// fs.appendFileSync("./test.txt", `${new Date().toLocaleString()} Hey Khushi\n`);

//to delete a file
// fs.unlinkSync("./copy.txt");

//to see stat of a file
//gives entire description of a file
// console.log(fs.statSync("./test.txt"));

//check if file is there
// console.log(fs.statSync("./test.txt").isFile());

//to make a directory in file system
//generates new directory with sub-directories a and b
//we don't have any such file operation inside JS because of security purposes
fs.mkdirSync("my-docs/a/b",{recursive:true});