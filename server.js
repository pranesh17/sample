const express = require("express");
const ejs = require("ejs");
const app = express();
const AWS = require('aws-sdk');
app.set('view engine', 'ejs');
app.use(express.static("public"));
const s3 = new AWS.S3( );


app.get("/", (req,res)=>{
    res.render("landing");
  });

//   AWS.config.update({
//     accessKeyId: "ASIASWFKN2QAWFY3CQG3",
//     secretAccessKey: "of0OOHlYsDNjToe5/QPW86o/+Nurev8Rc0+AMmt0"

//   });

  app.get("/login", (req,res)=>{
    res.render("login");
    var s3bucket = new AWS.S3();
    var params = {Bucket: 'dailyjournal123', Key:'sampletextnew.txt',
    Body: 'Hello this data!'};
    s3bucket.putObject(params, function(err, data) {
    if (err) {
     console.log("Error uploading data: ", err);
     } else {
      console.log("Successfully uploaded data to bucket");
     }
     });
  });
  
  app.get("/register", (req,res)=>{
    res.render("register");
  });
  const port=process.env.port || 8080;
  app.listen(port, function() {
    console.log("Server started on port 8080");
  });