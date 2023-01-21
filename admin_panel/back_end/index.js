const express = require('express');
const cookieParser=require('cookie-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const Users=require('./model/model.js');
const Item=require('./model/model_2.js');
require('./database/config.js');
const app=express(); 
app.use(cors());
app.use(express.json());
app.use(cookieParser());



       
app.post('/sign',async (req,res)=>{
try {
    const {name,email,password}=req.body;
        const old_user=await Users.findOne({Email:req.body.email})
        if(old_user)
        {
            console.log("user is present");
            res.send(`user is present`);
        }
    const encryptedUserPassword=await bcrypt.hash(password,10)
    const data= new Users({
        Name:name,
        Email:email,
        Password:encryptedUserPassword
    });
    const token = await data.generateToken();
    let result= await data.save();
    console.log(`user created`);
    res.send(result);
} catch (error) {
    console.log(`this is the ${error}`);
}
})

app.post("/login",async (req,res)=>{
    // console.log(req.body)
    const userName=req.body.email;
    const password=req.body.password;
const userDetails=await Users.findOne({Email:userName});
if(userDetails)
{
    const userMatch=await bcrypt.compareSync(password,userDetails.Password);
    console.log(userMatch);
    res.send(userMatch);

}
else
{
    res.send(false);
    console.log("false")
}                                        

    // res.send("working");
})
       


app.post("/add",async (req,res)=>{
    console.log(req.body);
    try {
            const data=new Item({
            Name:req.body.name,
            Cost:req.body.cost,
            Quantity:req.body.quant,
            Seller:req.body.seller
        });
        let result=await data.save();
        console.log(result);
        if(result)
        res.send(true);
        else
        res.send(false)
        
    } catch (error) {
        console.log(`this is ${error}`)
    }
})
app.get('/list',async(req,res)=>{
    const result=await Item.find();
    if(result.length>0) 
    {
        res.send(result);
    }
    else
    {
        res.send({result:"not found"});
    }
})

app.delete('/product/:id', async (req,res)=>{
    const result=await Item.deleteOne({_id:req.params.id})
    res.send(result);
})

app.get('/product/:id',async (req,res)=>{
    const result= await Item.findOne({_id:req.params.id})
    if(result)
    {
       // console.log(result);
        res.send(result);
    }
    else
    {
        res.send({result:"No Record found."});
    }
})

app.put('/product/:id', async(req,res)=>{
    let result=await Item.updateOne(
        {
            _id: req.params.id
        },
        {
            $set:{Name:req.body.name,
                  Cost:req.body.cost,
                  Quantity:req.body.quant,
                  Seller:req.body.seller       
            }
        }
    )
    console.log(result);
    res.send(result);
    console.log(req.body);
})
app.listen(4001,(req,res)=>{
    console.log('server is running on 4001');
})