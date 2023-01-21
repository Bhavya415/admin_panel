const mongoose=require('mongoose');

const Useritem=new mongoose.Schema({
    Name:String,
    Cost:Number,
    Quantity:Number,
    Seller:String
});


module.exports=mongoose.model('items',Useritem);