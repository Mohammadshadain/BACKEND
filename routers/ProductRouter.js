const Model=require('../models/ProductModel');
const express = require('express');
const router=express.Router();

router.get('/getall',(req,res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });

    
}
    
)
router.get('/add',(req,res)=>{
   console.log(req.body);
   new Model(req.body).save()
   .then((result) => {
    res.status(200).json(result);
    
   }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
    
    
   });
});
router.get('/start',(req,res)=>{
    res.send('response from start');
}) 
router.get('/getbytitle/:title',(req,res)=>{
    console.log(req.params.title);
    Model.find({title:req.params.title})
    
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });

})
module.exports = router;