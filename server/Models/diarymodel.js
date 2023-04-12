const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dairySchema = Schema(
    {
        email:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        dairydata:{
            type:String
        }
    }
);

module.exports = mongoose.model('dairy',dairySchema);