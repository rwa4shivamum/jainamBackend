import { UserModel } from "../model/userModel.js";

export const createUser = async(req, res) => {
    try {
        const {name,email,password,gender} = req.body;
        if(!name || !email || !password || !gender){
            res.json({
                status:false,
                message:"User credentials is missing"
            })
        }
        const user =await UserModel.create({name, email,password, gender})
        console.log(user)
        res.json({
            status:true,
            message:"User Got Created",
            data:user
        })
    } catch (error) {
        res.json({
            message:`${error.message}`
        })
    }
}

export const getUser = async(req, res) =>{
    try {
        const user =await UserModel.find()
        res.json({
            status:true,
            message:"user Got Successfully",
            data:user
        })
    } catch (error) {
        res.json({
            status:false,
            message:`Error in ${error.message}`
        })      
    }
}