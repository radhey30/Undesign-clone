const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

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

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "radheychitroda@gmail.com",
    pass: "eofk eprg iatn ckuz",
  },
});

const app = express();
app.use(cors());
app.use(express.json());

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

let randomResources = [];
app.get("/randomResources", (req, res) => {
  let resources = [];
  resourceModel.find({}).then((data) => {
    data.map((resource) => {
      resources.push(...resource.cards);
    });
    if (randomResources.length === 0) {
      for (let i = 0; i < 6; i++) {
        randomResources.push(
          resources[Math.floor(Math.random() * resources.length)]
        );
      }
    }
    res.send(randomResources);
  });
});

app.post("/forwardmail", (req, res) => {
  const SubmitMailOptions = {
    from: "radheychitroda@gmail.com",
    to: req.body.sendMailTo,
    subject: "Undesign | Resource Review",
    html: `<h3>Thanks for submitting your resource (${req.body.urlString}) to undesign. The review process can take up some time.</h3>`,
  };
  const RegisterMailOptions = {
    from: "radheychitroda@gmail.com",
    to: req.body.sendMailTo,
    subject: "Undesign | Registration",
    html: "<h3>Thank you for registering to our newsletter. Get the updates of the latest amazing tools.</h3>",
  };
  transporter.sendMail(
    req.body.type === "submit" ? SubmitMailOptions : RegisterMailOptions,
    (err, info) => {
      if (err) console.error(err);
    }
  );
  res.send("Mail sent successfully");
});

app.get("/:itemName", (req, res) => {
  resourceModel.find({ header: req.params.itemName }).then((data) => {
    res.send(data);
  });
});

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
