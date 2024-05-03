const express=require("express");
const urlroutes=require("./routes/url")
const staticroutes=require("./routes/static");
const {connectMONGO}= require("./connect")
const path =require('path');
const cookieParser=require("cookie-parser")
const app=express();
const port=5001;
const {restrictToLoggedinUserOnly}=require("./middleware/auth")

// MIDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.use('/',staticroutes);
// inline middleware in use 
app.use('/url',restrictToLoggedinUserOnly, urlroutes);
const userRoute = require("./routes/user");
app.use("/user", userRoute);

connectMONGO('mongodb://localhost:27017');

app.set('view engine', 'ejs');// set the express to look for the views folder 
// to do theserver side rendering  tech name for ssr
app.set('views',path.resolve("./views"))// views ka address batao
// app.get('/test', async (req, res) => {
//     return res.render("home");
// });

app.listen(port,()=>{
    console.log(`port has started at ${port}`)
})
