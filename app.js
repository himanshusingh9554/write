const http=require('http')
const routes=require("./routes")
const server = http.createServer((req,res)=>{
   
});
server.listen(3000,()=>{
    console.log("server is running");
});