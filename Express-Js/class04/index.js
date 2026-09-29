const express= require('express');
const app =express();
const router=express.Router();

const checkAuth=(req,res,next)=> {
    next();
};

const logTimestamp=(req,res,next)=>{
    console.log(Date.now());
    next();
};

router.use(checkAuth,logTimestamp);

router.get("/dashboard",(req,res)=>res.send("Admin Dashboard"));
router.get("/setting",(req,res)=>res.send("Admin Setting"));

app.use("/admin",router);

app.listen(3000,() =>{
    console.log("Server running on port 3000");
});