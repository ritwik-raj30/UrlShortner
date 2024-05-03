// this middleware will be the core of our authentication 
// whenever this middleware be applied to a route 
// that route can be  protected from the  unauthenticated 
// users 
const {getUser}= require("../service/auth");

async function restrictToLoggedinUserOnly (req,res,next)
{
const userUid=req.cookies.uid;
// case 1 user ki uid is not there
if(!userUid)
return res.redirect("/login");

// case someone has a uuid 
const user=getUser(userUid);
// manlo ye galat user hai 
if(!user) return res.redirect("/login");
// agar sab this hai toh req. user ki body me ye present user
// ko next fuction in line with the middleware call kar do 
req.user=user;
next();



}
module.exports={
    restrictToLoggedinUserOnly,
}
