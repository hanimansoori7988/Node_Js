const express = require('express');
const app = express()
const port = 3000
const users=require("./Api.json");

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user =users.find((user)=> user.id===id);
    if(!user){
        return res.status(404).json({
           success: false,
           message: "User not found", 
        });
    }
    res.json(user);
});

app.get('/', (req, res) => {
  res.send("Hello Hani");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})