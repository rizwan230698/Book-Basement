require("dotenv").config();
var express = require("express");
var app = express();
var session = require("express-session");
var hbs = require("hbs");
var mongoClient = require("mongodb").MongoClient;
var loginRouter = require("./routes/login-router");
var homeRouter = require("./routes/home-router");
var sellRouter = require("./routes/sell-router");
var bookRouter = require("./routes/book-router");
var profileRouter = require("./routes/profile-router");
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

app.use("/login", loginRouter);
app.use("/home", homeRouter);
app.use("/sellbooks", sellRouter);
app.use("/book", bookRouter);
app.use("/profile", profileRouter);

app.get("/", function(req, res) {
  res.render("landing.hbs", {
    title: "Book-Basement | Buy or sell old books",
    style: "landing.css",
    script: "landing.js"
  });
});

var PORT = 3000;
app.listen(process.env.PORT || PORT, function() {
  console.log("App now listening at port " + PORT);
});
