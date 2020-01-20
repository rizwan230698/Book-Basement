require("dotenv").config();
var express = require("express");
var app = express();
var session = require("express-session");
var hbs = require("hbs");
var mongoClient = require("mongodb").MongoClient;
var loginRouter = require("./login-router");
var homeRouter = require("./home-router");
var sellRouter = require("./sell-router");
var bookRouter = require("./book-router");
var profileRouter = require("./profile-router");
var url =
  "mongodb+srv://rizwan:rizwan123@rizwan-cluster-g7cq1.azure.mongodb.net/?retryWrites=true&w=majority"; //process.env.MONGO_URL
mongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(error, client) {
    if (error) throw error;
    app.locals.db = client.db("bookBasement");
  }
);
app.set("view engine", hbs);
hbs.registerHelper("is", function(parameter, string, options) {
  if (parameter == string) return options.fn(this);
});
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "blue rose"
  })
);

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("landing.hbs", {
    title: "Book-Basement | Buy or sell old books",
    style: "landing.css",
    script: "landing.js"
  });
});
app.use("/login", loginRouter);
app.use("/home", homeRouter);
app.use("/sellbooks", sellRouter);
app.use("/book", bookRouter);
app.use("/profile", profileRouter);

app.listen(process.env.PORT || 3000);
