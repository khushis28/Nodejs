const express = require("express");


//importing users data
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = 8000;

//middleware  - assume this as plugin
app.use(express.urlencoded({extended:false}));

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
    console.log('Body', body);
    
    return res.json({status : "pending"});
})

// app.patch('/api/users/:id', (req,res)=> {
//     //To-do: edit the user with ID
//     return res.json({status : "pending"});
// })

// app.delete('/api/users/:id', (req,res)=> {
//     //To-do: delete the user with ID
//     res.json({status : "pending"});
// })


//merging all routes
//if you want to change name of route, you don't have to do at multiple places, just do the changes at one place
app
    .route('/api/users/:id')
    .get((req,res)=>{
    //to convert 'id' from a string to a number
      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);
      return res.json(user);
})
    .patch((req,res)=> {
        //edit user with ID
        return res.json({status: "Pending"});
    })
    .delete((req,res)=> {
        //delete user with ID
        return res.json({status: "Pending"});
    });


app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
