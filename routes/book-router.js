var express = require("express");
var router = express.Router();

router.get("/:id", function(req, res) {
  var db = req.app.locals.db;
  if (req.session.loggedIn === true) {
    db.collection("books")
      .find({ _id: require("mongodb").ObjectId(req.params.id) })
      .toArray(function(error, result) {
        if (error) throw error;
        res.render("book.hbs", {
          title: "Book",
          style: "book.css",
          data: result
        });
      });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
