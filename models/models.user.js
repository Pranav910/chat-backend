import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        require : [true, "username cannot be empty"]
    },
    fname : {
        type : String,
        requier : true
    },
    lname : {
        type : String,
        require : true
    },
    email : {
        type : String,
        unique : true,
        require : true
    },
    password : {
        type : String,
        require : true,
    },
    profile : {
        type : String
    }
})

export const user = new mongoose.model("Users", schema)