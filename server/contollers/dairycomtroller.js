const dairy = require('../Models/diarymodel');
const getdairy = async(req,res)=>{
    const dairydata = await dairy.find({
        email:req.body.email
    });
    console.log(dairydata);

    res.json(dairydata);

}

const enterdairy = async (req,res)=>{

    // const dairydata = req.body;
    try{
        const newdata = dairy.create({
            date:req.body.date,
            email:req.body.email,
            dairydata:req.body.dairydata
        })
        res.json({
            ok:"ok"
        })
 
    }
    catch(err){
        console.log(err);
    }
   
}

module.exports = {getdairy,enterdairy}