const express = require("express");
const path = require("path");
const app = express();

app.set('view engine', 'ejs');

app.use("/static", express.static(path.join(__dirname, "public")))

app.get("/signup", function(req, res){
    res.render('elite_signup')
});

app.get("/login", function(req, res){
    res.render("elite_login")
});

app.get("/", function(req, res){
    res.render("elite_home")
});

app.get("/home", function(req, res){
    res.render("elite_home")
});

app.get("/dashboard", function(req, res){
    res.render("elite_dash")
});

app.listen(8080, function(){
    console.log("Hosted Server at http://localhost:8080 ")
})