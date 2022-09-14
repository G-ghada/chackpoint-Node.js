1
// const fs = require("fs");
// const path = require("path");

// const newpath = path.resolve("content", "welcome.txt");
// const newfile = fs.writeFileSync(newpath, "Hello Node");
// const welcome = fs.readFileSync(newpath,"utf-8");
// console.log(welcome);
// 2
const fs = require("fs");
const path = require("path");
const newpath = path.resolve("content", "hello.txt");
fs.readFile(newpath, "utf-8",(err,data)=> {
    if (err) throw err;
    console.log(data);
});