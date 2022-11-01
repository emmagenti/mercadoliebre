const express = require("express");
const app = express();
const path = require("path")

let PORT = process.env.PORT || 3030

app.listen(PORT, console.log("Listen on port " + PORT));

app.use(express.static("public"))

app.get("/", (req, res) => {
   
    res.sendFile(path.resolve("./views/home.html"))
})

app.get("/login", (req, res) => {
   
    res.sendFile(path.resolve("./views/login.html"))
})

app.get("/register", (req, res) => {
   
    res.sendFile(path.resolve("./views/register.html"))
})


