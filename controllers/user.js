
const User=require("../model/user")
const {setUser}=require("../service/auth")

async function usersignup(req,res)
{
    const {name , email,password,}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/");

}
async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
  console.log(user);
    if (!user)
      return res.render("login", {
        error: "Invalid Username or Password",
      });

      ///const sessionId = uuidv4();// session id created , now we need a funtion to store the uuid with the user object.
   const token= setUser(user);
   console.log(token);
    res.cookie("uid",token);
    return res.redirect("/");
    
    }
    

module.exports={usersignup,
    handleUserLogin,
};