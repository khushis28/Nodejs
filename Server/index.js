//making http server/API server
// const http = require("http");
// const myServer = http.createServer((req, res) => {
//     console.log("New Request Received");
//     res.end("Hello From Server");    
// });
// myServer.listen(8000, ()=>{
//     console.log("Server Started");
// });


//this code demonstrates how to create a basic HTTP server in Node.js that listens for incoming client requests, logs each request asynchronously into a file with a timestamp using the file system module, and then sends a simple text response back to the client. It shows how the http module handle requests and responses, how non-blocking file operations(fs.appendFile) are used to avoid blocking the event loop, and how a server is started on a specific port to handle multiple requests efficiently whule maintaining a log of server activity.

// const http = require("http");
// const fs = require("fs");
// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: New Request Received\n`;
//     fs.appendFile("log.txt", log, (err, data)=> {
//         res.end("Hello From Server"); 
//     });   
// });
// myServer.listen(8000, ()=>{
//     console.log("Server Started");
// });


//using {req.url} we can give multiple responses
const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New Request Received\n`;
    fs.appendFile("log.txt", log, (err, data)=> {
        switch(req.url){
            case '/': res.end("Home Page");
            break;
            case '/about': res.end("I am khushi singh");
            break; 
            default: res.end("404 Not Found");
        }
    });   
});
myServer.listen(8000, ()=>{
    console.log("Server Started");
});
