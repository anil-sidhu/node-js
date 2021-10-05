const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

app.get('/',async (res,resp)=>{
    let data = await dbConnect();
    data= await data.find().toArray();
    resp.send(data);
});

app.listen(5000)