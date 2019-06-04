const express = require('express');
const router = express.Router();
const productmodel = require('../models/productmodel')
const mongoose = require('mongoose');


router.get('/', function(req ,res){
    // const id = req.params.productID;
    productmodel.find()
    .exec()
    .then(product => {
         //res.json(products).status(200);
         res.render('saman', {product:product});
    })
});

router.delete('/:productID', (req, res) => {
    const id = req.params.productID;
    productmodel.deleteOne({_id:id})
    .exec()
    .then(data => {
        res.json(data).status(200);
    })
    .catch(err => {
        res.json(err).status(400);
    })
});
router.post('/', function(req, res){
    // console.log(req.body);
    // res.json(req.body).status(200);
    const newproduct = new productmodel({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        discription  : req.body.discription,
        price : req.body.price
    });
    productmodel.find({name: req.body.name})
    .exec()
    .then( product =>{
        if(product.length>0)
        {
            res.send("Product Already exist").status(400);
        }else{
            newproduct.save();
            res.send("Product created").status(201);
        }
    });

})

module.exports = router;
