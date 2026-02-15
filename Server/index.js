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
// const http = require("http");
// const fs = require("fs");
// const myServer = http.createServer((req, res) => {
//to stop logging favicon icon
// if (req.url === "/favicon.ico")return res.end(); 
//     const log = `${Date.now()}: New Request Received\n`;
//     fs.appendFile("log.txt", log, (err, data)=> {
//         switch(req.url){
//             case '/': res.end("Home Page");
//             break;
//             case '/about': res.end("I am khushi singh");
//             break; 
//             default: res.end("404 Not Found");
//         }
//     });   
// });
// myServer.listen(8000, ()=>{
//     console.log("Server Started");
// });



// const http = require("http");
// const fs = require("fs");
// //to parse the url, http can't do so
// const url = require("url");
// const myServer = http.createServer((req, res) => {
//       if (req.url === '/favicon.ico')return res.end();
//       const log = `${Date.now()}: ${req.url} New Request Received\n`;

//       //parsing req.url using url module
//       //url.parse acts like a filter that separates the address into different parts
//       //(req.url, true) -> parses query parameter strings
//     const myUrl= url.parse(req.url,true);
//     console.log(myUrl);
    
//     fs.appendFile("log.txt", log, (err, data)=> {
//         //by using switch(myUrl.pathname) you are telling server to only look for pathname instead of extra information
//         switch(myUrl.pathname){
//             case '/': 
//             res.end("Home Page");
//             break; 
//             case '/about': 
//             //extracts the myname parameter from the URL query string
//             //value is stored in username
//             const username = myUrl.query.myname;
//             //sends a response to the client saying “Hi, <name>”
//             res.end(`Hi, ${username}`);
//             break; 
//             case '/search':
//                 const search = myUrl.query.search_query;
//                 res.end("Here are your results for " + search);
//             default: 
//             res.end("404 Not Found");
//         }
//     });   
// });
// myServer.listen(8000, ()=>{
//     console.log("Server Started");
// });



//HTTP methods
// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const myServer = http.createServer((req, res) => {
//       if (req.url === '/favicon.ico')return res.end();
//       //creates a log string with timestamp, request method and URL
//       const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
//     const myUrl= url.parse(req.url,true);
//     fs.appendFile("log.txt", log, (err, data)=> {
//         switch(myUrl.pathname){
//             //if URL path is "/"
//             case '/': 
//             //allow only GET requests
//             if(req.method=== 'GET')
//             res.end("Home Page");
//             break; 
//             case '/about': 
//             const username = myUrl.query.myname;
//             res.end(`Hi, ${username}`);
//             break; 
//             case '/search':
//                 const search = myUrl.query.search_query;
//                 res.end("Here are your results for " + search);
//                 //if URL path is "/signup"
//                 case '/signup':
//                     //if request method is GET
//                     if(req.method === 'GET')
//                    res.end("This is a signup form");  
//                 //if request method is POST 
//                 else if (req.method === 'POST'){
//                     //here data gets saved normally to the database
//                     res.end("Success");
//                 }
//                 break;
//             //if no routes matches
//             default: 
//             res.end("404 Not Found");
//         }
//     });   
// });
// //start the server on port 8000
// myServer.listen(8000, ()=>{
//     console.log("Server Started");
// });



//Express.js framework
// const http = require("http");
//importing express framework
//helps in handling routes & requests easily
const express = require("express");

//creating an express application which acts as a handler function
//'app' will be used to define routes & middlewares
const app = express();


//defines a GET route for the homepage "/"
app.get("/", (req, res) => {
    //sends a response when user visits localhost:8000
    return res.send("Hello from Home page");
})


//defines a GET route for the homepage "/about" page
//This code defines a GET route for the '/about' page using Express. When a user visits the '/about' URL, the callback function is executed, where req represents the incoming request and res is used to send a response back to the client. The server responds with a text message that combines static text and query parameters (name and age) taken from the URL using req.query. For example, if the user visits '/about?name=Khushi&age=21', the response will dynamically display the user’s name and age in the message
// app.get("/about", (req,res) => {
//     return res.send("hello from about page " + "hey " + req.query.name + " you are " + req.query.age);
// })
//This code defines a GET route for the '/about' endpoint in an Express application. When a user visits the '/about' URL, the route handler runs and sends a response using res.send(). It uses a template literal to dynamically include the name value from the URL’s query parameters '(req.query.name)' in the response. For example, accessing '/about?name=Khushi' will display the message “Hello Khushi” in the browser
app.get("/about", (req,res) => {
     return res.send(`Hello ${req.query.name}`);
})

//creates an HTTP server
//we pass express app as a request handler
//express internally handles req and res
// you are manually creating an HTTP server using Node’s built-in http module and then passing the Express app as a request handler. This means you are explicitly handling server creation and listening.
// const myServer = http.createServer(app);
// myServer.listen(8000, ()=> console.log("server started!"));

//express js framework handles manually creating an HTTP server using nodejs built-in http module, express does this internally for us
//app.listen() method automatically creates an HTTP server using http.createServer() behind the scenes & attaches your Express app to it. This removes boilerplate code, makes the code cleaner and more readable, and lets you focus on routing, middleware, and application logic instead of low-level server setup
app.listen(8000, () => console.log("Server started!"));



