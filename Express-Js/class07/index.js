const express=require("express");
const app=express();
const port=3000;
const users=require("./Api.json");
app.use(express.json());
app.use(express.urlencoded());


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

app.post("/api/users",(req,res)=>{
    const newUser={
        id:users.length+1,
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body
       };
    console.log(newUser);
    users.push(newUser);
    res.json(newUser);
});

app.put("/api/users/:id",(req,res)=>{
const id=Number(req.params.id);
const user = users.find((user) => user.id === id);

if (!user) {
    return res.status(404).json({
        success: false,
        message: "User not found"
    });
}

user.userId = req.body.userId;
user.title = req.body.title;
user.body = req.body.body;

res.json({
    success: true,
    message: "User updated successfully",
    user: user
});

});
app.get('/', (req, res) => {
  res.send("Hello Hani");
});


app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.json({
        success: true,
        message: "User deleted successfully",
        user: deletedUser[0]
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


