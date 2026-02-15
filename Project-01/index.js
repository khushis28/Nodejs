//requiring express
const express = require("express");

//requiring middleware
const {logReqRes} = require("./middlewares/")
//requiring mongodb connection
const {connectMongoDB} = require("./connection") 
//requiring router
const userRouter = require("./routes/user");

//create app instance
const app = express();
//created PORT
const PORT = 8000;


// const fs = require("fs");
// const mongoose = require("mongoose");




//connection
// mongoose
//    .connect("mongodb://127.0.0.1:27017/my-app-1")
//    .then(()=>console.log('MongoDB connected'))
//    .catch((err) => console.log("Mongo Error", err));

//Connection done
connectMongoDB("mongodb://127.0.0.1:27017/my-app-1").then(()=> console.log("MongoDB connected!")
);


//importing users data
// const users = require('./MOCK_DATA.json');
// const { type } = require("os");



//schema
// const userSchema = new mongoose.Schema({
//     //here first name is required of a user
//     first_name:{     
//         type:String,
//         required:true,
//     },
//     //here last  name is NOT required of a user
//     last_name: {
//         type:String,     
//         required:true,
//     },
//     //checks before inserting if there is any same/duplicate entry
//     email: {
//         type: String,
//         required:true,
//         unique:true,
//     },
//     job_title: {
//         type: String,
//     },
//     gender: {
//         type: String,
//     },
// }, {timestamps: true}
// );

//model 
// const User = mongoose.model("user", userSchema);


//used middleware  - assume this as plugin
app.use(express.urlencoded({extended:false}));
//used log-request-response middleware
app.use(logReqRes("log.txt"));

//creating custom middlewares
// app.use((req,res,next)=>{
//     // console.log('Hello from middleware 1');
//     // req.myUserName = "khushisingh28";
//     fs.appendFile('log.txt', `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`, (err,data) =>{
//         next();
//     });
// })

// app.use((req,res,next)=>{
//     // console.log('Hello from middleware 2', req.myUserName);
//      console.log('Hello from middleware 2');
//     next();
// })


//Routes
//renderig html doc
// app.get('/users', async(req,res)=>{
//     /*
//     <ul>
//           <li>Khushi Singh</li>
//     */

//    const allDBUsers = await User.find({});
//    const html = `
//    <ul>
//      ${allDBUsers.map(user => `<li>${user.first_name} - ${user.email}</li>`).join("")}    
//     </ul>`;
//    res.send(html);
// })


//rest api points
// app.get('/api/users', (req,res)=>{
//     // console.log('I am in GET route', req.myUserName);
//     return res.json(users);
// })


//simple routing
// app.get("/api/users/:id", (req,res)=>{
//     //to convert 'id' from a string to a number
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })

// app.post('/api/users', async(req,res)=> {
//     const body = req.body;
//     if(!body || !body.first_name ||!body.last_name || !body.email || !body.gender || !body.job_title){
//         return res.status(400).json({msg: "All fields are required..."});
//     }

    //creates user
// const result = await User.create({
//         first_name: body.first_name,
//         last_name: body.last_name,
//         email: body.email,
//         job_title: body.job_title,
//         gender: body.gender,
//     });
//     // console.log("result", result);
//     return res.status(201).json({msg: "success"});
// });
    // users.push({...body, id: users.length+1});
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({status : "success", id: users.length});
    // });


// app.patch('/api/users/:id', (req,res)=> {
//     const id = Number(req.params.id);
//     const body = req.body;
//     const user = users.find(user=> user.id === id);
//     if(!user){
//         return res.json({status : "user not found"});
//     }

//     //update fields
//     Object.assign(user,body);
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//         return res.json({status : "success", updatedUser:user});
//     });
// });


// app.delete('/api/users/:id', (req,res)=> {
//    const id = Number(req.params.id);
//    const index = users.findIndex(user => user.id=== id);
//    if(index === -1){
//     return res.json({status : "User not found"});
//    }
//    users.splice(index,1);
//    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//         return res.json({status : "success", deletedId:id});
//     })
// })


//merging all routes
//if you want to change name of route, you don't have to do at multiple places, just do the changes at one place
// app
//     .route('/api/users/:id')
//     .get(async (req,res)=>{
//     //to convert 'id' from a string to a number
//     //   const id = Number(req.params.id);
//     //   const user = users.find((user) => user.id === id);
//     const user = await User.findById(req.params.id);
//       if(!user) return res.status(404).json({error: 'user not found'});
//       return res.json(user);
// })
    // .patch(async(req,res)=> {
    //     await User.findByIdAndUpdate(req.params.id, {last_name: "Changed"});
    //     //edit user with ID
    //     return res.json({status: "Success"});
    // })

    // .delete(async(req,res)=> {
    //     //delete user with ID
    //     await User.findByIdAndDelete(req.params.id);
    //     return res.json({status: "Success"});
    // });


//REST API -> sends to all users as a json
// app.get("/api/users", async(req,res)=>{
//     const allDBUsers = await User.find({});
//     //custom header -> always add X to custom headers
//     // res.setHeader('X-myName','Khushi Singh');
//     // console.log(req.headers);
//     return res.json(allDBUsers);
// })


//registered a route, if any request comes on /user, then use -> userRouter 
app.use("/api/users", userRouter);


//started the app
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
