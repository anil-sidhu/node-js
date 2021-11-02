const express = require("express");
const con = require("./config");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});



app.listen("5000")