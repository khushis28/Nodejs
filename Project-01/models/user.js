const mongoose = require("mongoose");

//created Schema
const userSchema = new mongoose.Schema({
    //here first name is required of a user
    first_name:{     
        type:String,
        required:true,
    },
    //here last  name is NOT required of a user
    last_name: {
        type:String,     
        required:true,
    },
    //checks before inserting if there is any same/duplicate entry
    email: {
        type: String,
        required:true,
        unique:true,
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String,
    },
}, {timestamps: true}
);



//created Model
const User = mongoose.model("user", userSchema);

module.exports = User;