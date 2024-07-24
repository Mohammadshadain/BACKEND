const Model=require('../models/UserModels');
const express = require('express');
const router=express.Router();


router.post('/add',(req,res) => {
    console.log(req.body);//
    new Model(req.body).save() // THIS fn is to save thaa data in db
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });

});

router.get('/getall',(req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        log.error(err);
        res.status(500).json(err);
        
    });
   
})

module.exports = router;


/**     Response Status Code
 * Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
 * 
 * 
*/