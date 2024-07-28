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
router.get('/getbybrand/:brand',(req,res)=>{
    console.log(req.params.brand);
    Model.findOne({brand:req.params.brand})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
 
        
    });

    
}) 
router.get('/getbytitle/:title',(req,res)=>{
    console.log(req.params.title);
    Model.findOne({title:req.params.title})
    
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });

})
router.get('/getbyprice/:price',(req,res)=>{
    console.log(req.params.price);
    Model.findOne({price:req.params.price})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(result)
        
    });
})
router.put('/updatebyid/:id',(req,res)=>{
    console.log(req.params.id)
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    });
})
router.delete('/deletebyid/:id',(req,res)=>{
    console.log(req.params.id)
    Model.findByIdAndDelete(req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    });
})
module.exports = router;