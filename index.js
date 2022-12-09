const express=require('express')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
const route= require("./route/route")

const app= express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Sachangarima:Sachangarima@mycluster.pp8zdjn.mongodb.net/test"
    ,
    { useNewUrlParser: true})
    .then(() => console.log("Mongodb is connected"))
    .catch((err) => console.log(err))

app.use("/", route);

 app.listen(process.env.PORT || 3000 , function(){
    console.log("Express app running on port" +" " +(process.env.PORT || 3000)) 
 })