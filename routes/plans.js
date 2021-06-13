const express = require('express');
const router = express.Router();
const { Plan } = require('../models/plan');

router.get("/all", async(req, res)=>{

    // const temp = new Plan({
    //     value: "temp"
    // });

    // await temp.save();

    const plans = await Plan.find({}).select("value");

    return res.send({plans: plans});
});

module.exports = router;