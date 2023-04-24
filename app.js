const express = require("express");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

// app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.listen(3000, function(){
    console.log("Connected port 3000.")
});