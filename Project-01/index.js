const express = require("express");
const fs = require("fs");

//importing users data
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = 8000;

//middleware  - assume this as plugin
app.use(express.urlencoded({extended:false}));


//creating custom middlewares
app.use((req,res,next)=>{
    // console.log('Hello from middleware 1');
    // req.myUserName = "khushisingh28";
    fs.appendFile('log.txt', `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`, (err,data) =>{
        next();
    });
})

// app.use((req,res,next)=>{
//     // console.log('Hello from middleware 2', req.myUserName);
//      console.log('Hello from middleware 2');
//     next();
// })


//Routes
//renderig html doc
app.get('/users', (req,res)=>{
    /*
    <ul>
          <li>Khushi Singh</li>
    */
   const html = `
   <ul>
     ${users.map(user => `<li>${user.first_name}</li>`).join("")}    
    </ul>`;
   res.send(html);
})


//rest api points
app.get('/api/users', (req,res)=>{
    // console.log('I am in GET route', req.myUserName);
    return res.json(users);
})


//simple routing
// app.get("/api/users/:id", (req,res)=>{
//     //to convert 'id' from a string to a number
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })

app.post('/api/users', (req,res)=> {
    const body = req.body;
    if(!body || !body.first_name ||!body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg: "All fields are required..."});
    }
    users.push({...body, id: users.length+1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({status : "success", id: users.length});
    });
});

app.patch('/api/users/:id', (req,res)=> {
    const id = Number(req.params.id);
    const body = req.body;
    const user = users.find(user=> user.id === id);
    if(!user){
        return res.json({status : "user not found"});
    }

    //update fields
    Object.assign(user,body);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        return res.json({status : "success", updatedUser:user});
    });
});


app.delete('/api/users/:id', (req,res)=> {
   const id = Number(req.params.id);
   const index = users.findIndex(user => user.id=== id);
   if(index === -1){
    return res.json({status : "User not found"});
   }
   users.splice(index,1);
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        return res.json({status : "success", deletedId:id});
    })
})


//merging all routes
//if you want to change name of route, you don't have to do at multiple places, just do the changes at one place
app
    .route('/api/users/:id')
    .get((req,res)=>{
    //to convert 'id' from a string to a number
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      if(!user) return res.status(404).json({error: 'user not found'});
      return res.json(user);
})
    // .patch((req,res)=> {
    //     //edit user with ID
    //     return res.json({status: "Pending"});
    // })

    // .delete((req,res)=> {
    //     //delete user with ID
    //     return res.json({status: "Pending"});
    // });


app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
