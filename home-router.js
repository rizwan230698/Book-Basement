var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
    var db = req.app.locals.db;
    if(req.session.loggedIn === true){
        db.collection("books").find({}).toArray(function(error,result){
            if(error) throw error;
            res.render("home.hbs",{
                title:'Book Basement',
                style: 'home.css',
                script: 'home.js',
                data: result
            })

        })
   
}
else{
    res.redirect("/login")
}
})

router.get("/logout",function(req,res){
    req.session.destroy()
    res.json({success:"Logged out"})
})








module.exports = router;