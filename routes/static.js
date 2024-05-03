const express = require("express");
const router = express.Router(); // Capital "R" in "Router"
const url=require("../model/url");
const { generateurl } = require("../controllers/url");


router.get('/',(req,res)=>
{
    return res.render("home")
})

router.get("/signup", (req, res) => {
    return res.render("signup");
  });


  
  router.get("/login", (req, res) => {
    return res.render("login");
  });



  
module.exports = router;