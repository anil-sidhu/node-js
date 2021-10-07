const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (res, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});

app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insert(req.body)
    resp.send(result)

})

app.put("/:name", async (req, resp) => {
    console.log(req.body)
    const data = await dbConnect();
    let result = data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    resp.send({ status: "updated" })
})

app.listen(5000)