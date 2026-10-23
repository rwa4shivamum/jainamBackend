import mongoose, { model } from "mongoose";

const userModel = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    gender:{
        type:String
    }
})

export const UserModel = mongoose.model("userModel", userModel)