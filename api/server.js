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
  resourceModel.find().then((data) => {
    res.send(data);
  });
});

app.get("/getallresources", (req, res) => {
  let resources = [];
  resourceModel.find({}).then((data) => {
    data.map((resource) => {
      resources.push(...resource.cards);
    });
    res.send(resources);
  });
});

app.get("/randomResources", (req, res) => {
  let resources = [];
  let randomResources = []
  resourceModel.find({}).then((data) => {
    data.map((resource) => {
      resources.push(...resource.cards);
    });
    for(let i=0;i<6;i++) {
      randomResources.push(resources[Math.floor(Math.random()*resources.length)])
    }
    res.send(randomResources)
  });
});

app.get("/:itemName", (req, res) => {
  resourceModel.find({ header: req.params.itemName }).then((data) => {
    res.send(data);
  });
});


app.listen(4000, () => {
  console.log("Server started at port 4000");
});
