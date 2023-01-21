const bcrypt=require('bcrypt')
const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');
const privateKey="thisisprivatekey";


const UserSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Token:[{
        token:String
    }]
});

// const Useritem=new mongoose.Schema({
//     Name:String,
//     Cost:Number,
//     Quantity:Number,
//     Seller:String
// })



// UserSchema.pre("save",async function(next){
//   console.log(this.Password)
// })


UserSchema.methods.generateToken=async function()
{
    try {
        const token=jwt.sign({_id:this._id.toString()},privateKey);
        this.Token=this.Token.concat({token:token});   
         await this.save();
        return token;     
        //console.log(token);
        
    } catch (error) {
        console.warn(`this is the ${error}`);
        
    }
}



module.exports=mongoose.model('user',UserSchema);
// module.exports=mongoose.model('item',Useritem);

// Creating model objects
// const users = mongoose.model('user', UserSchema);
// const Item = mongoose.model('items', Useritem);

  
// Exporting our model objects
// module.exports = {
//     users, Item}