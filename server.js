const express = require("express");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", (req,res)=>{
    res.render("landing");
  });

  const port=process.env.port || 8080;
  app.listen(port, function() {
    console.log("Server started on port 8080");
  });