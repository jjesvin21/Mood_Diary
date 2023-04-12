const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const user = require('../Models/usermodel');
require('dotenv').config();
const addnewuser = async (req,res)=>{
    
    console.log(req.body);
    try{
        const newuser = await user.create({
            email:req.body.email,
            name:req.body.name,
            passsword:req.body.password
        })
       return(res.status(200)).json(newuser);
    }
    catch(err){
         return(res.status(400).json({err:err}));
    }

}



const login = async (req,res)=>{
    const email = req.body.email;
    const find = await user.findOne({
        email:email,
        passsword:req.body.password
    });
    console.log(find);
    
    if(find)
    {
        if(find.email===email)
        {
            const tocken = jwt.sign({
                email:find.email,
                password:find.passsword
            },process.env.KEY)
            return(res.status(200).json({
                email:find.email,
                tocken:tocken
            }))
        }
        else{
            return(res.status(400).json({
                err:"error"
            }));
        }
    }
    else{
        return(res.status(400).json({
            err:"error"
        }));
    }



}

const authenticate = (req,res)=>{
    const tocken = req.body.tocken;
    const email = req.body.email;
    const valid = jwt.verify(tocken,process.env.KEY);
    if(valid.email === email)
    {
        return(
            res.status(200).json({
                res:"ok"
            })
        )
    }
    else{
        return(
            res.status(400).json({
                res:"notok"
            })
        )
    }
}


module.exports = {addnewuser,login,authenticate}