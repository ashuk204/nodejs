const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },
    product :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product',
        required : true,
    },
    quantity :{
        type : Number,
        default :1,
    },
    date :{
        type : Date,
        default : Date.now,
    },
});


module.exports= mongoose.model('order' , orderSchema);