const http = require ("http");
const server = http.createServer((req,res)=> {
    if( req.url === "/"){
        res.write("<h1> Hello Node!!!! </h1>");
        res.end();
    } else {
        res.writeHead(200, {"Content.type": "text/html"});
        res.write("wrong page");
        res.end();
    }
});
server.listen(3000, ()=> {
    console.log("server is running and listening");
});