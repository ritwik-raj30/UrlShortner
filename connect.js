const mongoose=require('mongoose');
async  function connectMONGO( url)
{
return mongoose.connect(url)
.then(()=>console.log("mongodb-connected"))
.catch(err=>console.log("mongo error",err));
}
module.exports={connectMONGO};
