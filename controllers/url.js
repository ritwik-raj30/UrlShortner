// import { nanoid } from 'nanoid'

// const url= require("../model/url");
// const { response } = require("express");
// async function generateurl(req, res) {
//     try {
//         const  body  = body.req;
//         const shortid = nanoid(10);
//         await url.create({
//             urlname: body.url,
//             shorturl: shortid,
//         });
//         return res.json({ id: shortid });
//     } catch (error) {
//         // Handle error appropriately, for example:
//         console.error(error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// }
// module.exports = generateurl;
const { nanoid } = require('nanoid');
const url = require('../model/url');

async function generateurl(req, res) {
 
        const body = req.body; // Corrected the way to access req.body
        if(!body.url) return res.status(400).json({error:"eror url req"})
 
        const shortid = nanoid(10);
        console.log("shortid is" ,shortid)
        await url.create({
            // Access the 'url' property from the 'body' object
            shorturl: shortid,
            urlname: body.url,
        });
     return res.render("home",{
        id:shortid,
     });
    
}

module.exports = {generateurl};