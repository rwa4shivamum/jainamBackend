import mongoose from "mongoose";

export const mongoConnect = () =>{
    try {
        mongoose.connect("mongodb://localhost:27017/");
        console.log("mongodb Connected")
    } catch (error) {
        console.log(error)
    }
}