//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/data", function(req, res){
  res.sendFile(__dirname + "/data.html");
});

app.get("/deal", function(req, res){
  res.sendFile(__dirname + "/deal.html");
});

app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/contact.html");
});

app.get("/company", function(req, res){
  res.sendFile(__dirname + "/company.html");
});

app.get("/service", function(req, res){
  res.sendFile(__dirname + "/service.html");
});

app.get("/social", function(req, res){
  res.sendFile(__dirname + "/social.html");
});

app.get("/social1", function(req, res){
  res.sendFile(__dirname + "/social1.html");
});

app.get("/media", function(req, res){
  res.sendFile(__dirname + "/media.html");
});
app.get("/media1", function(req, res){
  res.sendFile(__dirname + "/media1.html");
});
app.get("/media2", function(req, res){
  res.sendFile(__dirname + "/media2.html");
});

app.get("/market", function(req, res){
  res.sendFile(__dirname + "/market.html");
});
app.get("/market1", function(req, res){
  res.sendFile(__dirname + "/market1.html");
});
app.get("/market2", function(req, res){
  res.sendFile(__dirname + "/market2.html");
});
app.get("/market3", function(req, res){
  res.sendFile(__dirname + "/market3.html");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
