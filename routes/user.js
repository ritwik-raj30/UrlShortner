// this route will handle alll user related routes
//
const express=require("express");
const router= express.Router();
const {usersignup , handleUserLogin}=require("../controllers/user");
// we need controllers for our routers

router.post('/',usersignup);
router.post("/login", handleUserLogin);
module.exports=router;
