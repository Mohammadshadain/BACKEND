const Model=require('../models/ProductModel');
const express = require('express');
const router=express.Router();
router.get('/add',(req,res)=>{

    res.send('response from add');

})
router.get('/getall',(req,res)=>{
    res.send('response from get all');
}
    
)
router.get('/end',(req,res)=>{
    res.send('response from end');
});
router.get('/start',(req,res)=>{
    res.send('response from start');
}) 
module.exports = router;