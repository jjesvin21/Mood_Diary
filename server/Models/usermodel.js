const { text } = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        email:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        passsword:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model("user",userSchema);