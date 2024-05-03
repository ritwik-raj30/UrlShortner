const mongoose = require('mongoose');
// this was the schema 
const userurlSchema=new mongoose.Schema(

  {  urlname:{ type :String ,  required :true},
     shorturl:{type: String ,
        unique: true,
         required :true,}

  }
)
// using the model 
  // mongo model - model is used to interact with the data base 
  const UserUrl = mongoose.model('UserUrl', userurlSchema);

  module.exports = UserUrl;

