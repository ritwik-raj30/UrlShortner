
const jwt = require("jsonwebtoken");
const secret="ritwik@123";


function setUser(user)
{
    return jwt.sign({
      _id: user._id,
      email: user.email,


    },secret);


}

function getUser(token)
{
  console.log(token);
  if(!token) return  null;
  return jwt.verify(token,secret);
    
}
// now in my cokkies we will have our tokens


module.exports={
    setUser,
    getUser,

};
// this is like a real world diary which 
// is ise to mark the user with their uniqure cookie
