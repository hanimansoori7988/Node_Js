const express=require("express");
const {createUser, getUsers} =require("../Controller/userController");
const router = express.Router();
router.post("/create",createUser);
router.get("/getusers",getUsers);
module.exports=router;
















