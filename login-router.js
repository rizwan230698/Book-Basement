var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
    res.render("login.hbs",{
        title: 'Login Page',
        style: 'login.css',
        script: 'login.js'
    })
})
router.post("/signup",function(req,res){
       var db = req.app.locals.db;
        db.collection("users").insertOne(req.body,function(error,result){
            if(error) throw error;
            res.json({success: 'signup'})
    
        })
  
})
router.post("/auth",function(req,res){
    var db = req.app.locals.db;
    db.collection("users").find({}).toArray(function(error,result){
        if(error) throw error;
    
        for(var i=0; i<result.length; i++){
            if(result[i].username === req.body.username && result[i].password === req.body.password){
                req.session.loggedIn = true;
                req.session.email = result[i].email
                req.session.username = result[i].username
                break;
            }
        }
        res.redirect("/home")
    })
})
router.put("/resetPassword",function(req,res){
    var db = req.app.locals.db;
    db.collection("users").updateOne({email:req.body.email},{$set:{password:req.body.password}},function(error,result){
        if(error) throw error;
        res.json({success:"Updated"})
    })
})





module.exports = router;