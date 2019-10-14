var express = require("express");
var router = express.Router()
router.get("/",function(req,res){
    if(req.session.loggedIn === true){
        var db = req.app.locals.db;
    db.collection("books").find({email:req.session.email}).toArray(function(error,result){
        if(error) throw error;
        res.render("profile.hbs",{
            title: "Profile",
            style: "profile.css",
            script: "profile.js",
            data: result,
            email: req.session.email,
            username: req.session.username
        })
    })
    }
    else{
        res.redirect("/login")
    }
    
})

router.get("/:id",function(req,res){
    var db = req.app.locals.db;
    if(req.session.loggedIn === true){
        db.collection("books").find({_id:require("mongodb").ObjectId(req.params.id)}).toArray(function(error,result){
            if(error) throw error;
            res.render('mybook.hbs',{
                title:'My Books',
                style: 'my-book.css',
                script: 'my-book.js',
                data: result
            })
        })
    }
    else{
        res.redirect("/login")
    }
    
})
router.get("/delete/:id",function(req,res){
    var db = req.app.locals.db;
    console.log(req.params.id)
    db.collection("books").deleteOne({_id:require("mongodb").ObjectId(req.params.id)})
    res.redirect("/profile")
})
router.post("/edit/:id",function(req,res){
    var db = req.app.locals.db;
    db.collection("books").updateOne({_id:require("mongodb").ObjectId(req.params.id)},{$set:{title:req.body.title,author:req.body.author,description:req.body.description,price:req.body.price}})
    res.redirect("/profile")
})














module.exports = router;













