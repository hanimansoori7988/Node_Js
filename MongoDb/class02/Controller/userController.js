// const { message } = require("status");
const { message } = require("statuses");
const User = require("../Model/userModel");

const createUser = async (req,res)=>{
    try{
        const {name,email,age}=req.body;
        const user=await User.create({
            name,
            email,
            age,
        });
        res.status(201).json({
            success:true,
            message:"user created",
            data:user,
        });
    } catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        });
    
    }
    
};

const getUsers=async (req,res) =>{
    try{
        const users = await User.find();
        res.status(200).json({
            success:true,
            message:"user fetched",
            count:users.length,
            data:users,
        });
        }
        catch(error){
            res.status(500).json({
                success:false,
                message:error.message,
            });
        }

}

module.exports = {
    createUser,
    getUsers
};