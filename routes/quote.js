const express = require('express');
const router = express.Router();
const { Quote } = require('../models/quote');

router.get("/get_quote", async(req, res)=>{

    const quote = await Quote.find({}).select("value");

    return res.send({quote: quote[0].value});
});

module.exports = router;