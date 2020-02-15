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

// var user = new dbModel.User({
//   name: "walid",
//   age: 29
// });

// user.save().then(result => {
//   console.log(result);
// });

dbMethod.insertMany(dbModel.User, [{ name: "soso", age: 10 }]).then(result => {
  console.log(result);
});
