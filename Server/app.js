var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const sequelize=require('./models/connectDB')
const Sequelize = require('sequelize');
 require('./models/driver')
 require('./models/restaurant')



var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var driverRouter = require("./routes/driver");
var restaurantRouter = require("./routes/restaurant");



var mysql = require("mysql");

var app = express();

//--------------------------------------------
//Connecting React
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//--------------------------------------------
//MySQL setup
/* var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
}); */

//--------------------------------------------
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/driver", driverRouter);
app.use("/restaurant", restaurantRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
sequelize.sync().then(r=> {
console.log("🚀 ~ file: app.js:64 ~ sequelize.sync ~ r:", r)
//app.listen(3000);
})

module.exports = app;
