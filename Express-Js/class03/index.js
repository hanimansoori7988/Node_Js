const express = require("express");
const app = express();
const port = 3000;

function validateProductId(req,res,next){
    const id=parseInt(req.params.id);
    if(Number.isNaN(id) || id<=0){
        return res.status(4000).json({success:false, error: 'Invalid Product Id',});
         }
         next();
    }

    app.get("/product/:id",validateProductId,(req,res,next)=>{
        const productId=parseInt(req.params.id);
        console.log(productId);
        if(productId !==1){
            const err=new Error("Product not found");
            err.status=404;
            return next(err);
             }
              res.json({ id: productId, name: 'Sample Product' });
    })

    app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
