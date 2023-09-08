const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const uri =
  "mongodb+srv://radheychitroda:undesign@cluster0.ejqb2zc.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error(err);
  });

const resourceModel = require("./models/resourceModel");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  resourceModel.find().then(data => {
    res.send(data)
  })
});

app.get("/:itemName", (req,res)=>{
  let itemName = req.params.itemName[0].toUpperCase()+req.params.itemName.slice(1,)
  resourceModel.find({title: itemName}).then(data => {
    res.send(data)
  })
})

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
