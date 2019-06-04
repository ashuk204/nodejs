const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userModel = require('../models/usermodel')

router.get('/', function(req ,res){
    res.send("User's home").send(200);  
});

router.post('/', function(req, res){
    // console.log(req.body);
    // res.json(req.body).status(200);
    const newuser = new userModel({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        email : req.body.email,
        password :bcryptjs.hashSync(req.body.password , 10)
    });
    userModel.find({email: req.body.email})
    .exec()
    .then( user =>{
        if(user.length>0)
        {
            res.send("Account Already exist").status(400);
        }else{
            newuser.save();
            res.send("Account created").status(201);
        }
    })

})

module.exports = router;
