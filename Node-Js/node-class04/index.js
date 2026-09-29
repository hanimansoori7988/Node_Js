const http =require('http');
const port=3000;

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("content-type","text/html");
        res.write("<h1>hello hani</h1>");
        res.end();
    }


else if (req.url === "/about") {
   res.setHeader("Content-Type","text/plain");
    res.write("this is the about page");
    res.end();
}
})
 
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

