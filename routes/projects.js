const express = require('express');
const router = express.Router();
const { Project } = require('../models/project');

router.get("/all", async(req, res)=>{

    // const temp = new Project({
    //     title: "temp",
    //     date: "temp",
    //     stack: "temp",
    //     description: "temp",
    //     url: "temp"
    // });

    // await temp.save();

    const projects = await Project.find({});

    return res.send({projects: projects});
});

module.exports = router;