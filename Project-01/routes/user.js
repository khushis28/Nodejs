const express = require("express");
const {handleGetAllUsers, handleGetUserById, handleUpdateUserById,handleDeleteUserById, handleCreateNewUser} = require("../controllers/user");

//creating separate express router
const router = express.Router();

//Registered routes
router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);


// router.get("/", async(req,res)=>{
//     const allDBUsers = await User.find({});
//     return res.json(allDBUsers);
// })

router
    .route('/:id')
    .get(handleGetUserById)
    .patch (handleUpdateUserById)
    .delete(handleDeleteUserById);
    

//     .get(async (req,res)=>{
//     const user = await User.findById(req.params.id);
//       if(!user) return res.status(404).json({error: 'user not found'});
//       return res.json(user);
// })
    // .patch(async(req,res)=> {
    //     await User.findByIdAndUpdate(req.params.id, {last_name: "Changed"});
    //     return res.json({status: "Success"});
    // })
    // .delete(async(req,res)=> {
    //     //delete user with ID
    //     await User.findByIdAndDelete(req.params.id);
    //     return res.json({status: "Success"});
    // });


// router.post('/', async(req,res)=> {
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
//     return res.status(201).json({msg: "success"});
// });

module.exports = router;