const express = require("express");
const router = express.Router(); // Capital "R" in "Router"
const url=require("../model/url");
const { generateurl } = require("../controllers/url");


//********EJS */

router.get('/test', async (req,res)=>{
    const allurl= await url.find({});
    console.log(allurl);


return res.render("home",{
    urls: allurl,


});// here we provide the views file name 
// which we want to render we can render more than one form also 


})


module.exports = router;


//*********** */









router.post('/', generateurl);
router.get('/:shortid', async (req, res) => {
    console.log("hello");
    const shortId = req.params.shortid; // Corrected parameter name
    const entry = await url.findOne({ shorturl: shortId }); // Use shorturl instead of shortId

    if (!entry) {
        return res.status(404).send('URL not found');
    }

    console.log(entry.urlname);
    res.redirect(entry.urlname);
});
module.exports = router;