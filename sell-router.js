var express = require("express");
var cloudinary = require("cloudinary").v2;
var multer = require("multer");
var router = express.Router();
var upload = multer({dest: "public/images"})
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
    });


router.get("/",function(req,res){
    if(req.session.loggedIn === true){
        res.render("sell.hbs",{
            title: 'Sell Book',
            style: 'sell.css',
        })
    }
    else{
        res.redirect("/login")
    }
    
})

router.post("/upload",upload.single("image"),async function(req,res,next){
    var db = req.app.locals.db;
    var result = await cloudinary.uploader.upload(req.file.path)
    db.collection("books").insertOne({
        email:req.body.email,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        image: result.secure_url
    });
    res.redirect("/home")
})











module.exports = router;