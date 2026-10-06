const express = require ("express");
const cors =require("cors");
const mongoose =require("mongoose");
const dotenv =require("dotenv");

dotenv.config();
const app =express();
app.use(cors());
app.use(express.json());

mongoose
 .connect(process.env.MONGO_URL)
 .then(()=> console.log("DB Connected"))
 .catch((err) => console.error("Error",err));

const port= process.env.PORT || 5000;
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
   

