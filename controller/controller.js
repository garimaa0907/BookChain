
const model= require("../model/model")
let axios = require('axios')

const getcoin= async function(req, res){
    try{
    let options= {
        method: "get",
        url: "https://api.coincap.io/v2/assets",
        headers:{
            Authorization : "Bearer 866dc8ef-0110-4a5e-a544-9553aa8b4dfb"
        }
    }
    let data = await axios (options);
    let dataa= data.data.data
    let sorted= dataa.sort((a,b)=>a.changePercent24Hr-b.changePercent24Hr)
     await model.deleteMany()
     let create= await model.create(dataa)
    return res.status(201).send({status:true, data:sorted,create})
}
    catch(err){
        res.status(500).send({status:true, message:err.message})
    }
    
}
module.exports= {getcoin}