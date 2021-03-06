const mongoose = require("mongoose");
const dbModel = require("./Model");
const dbMethod = require("./utils ");
const chalk = require("chalk");

const dbName = "task-manager-api";
const dbLink = "mongodb://127.0.0.1:27017/";
const dbURL = dbLink + dbName;

// initialize the connection / url=>link+name / option =>{}
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// connection event to get notified if we connect successfully
const db = mongoose.connection;
db.on("error", error => {
  console.log(chalk.red("mongoDB connection error"));
});
db.once("open", function() {
  console.log(chalk.green("mongoDB connected successfully"));
});

dbMethod
  .insertOne(dbModel.User, {
    name: "eee2",
    age: 0
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    if (err.name === "ValidationError") {
      console.log(``);
    }
  });
