const { JsonWebTokenError } = require('jsonwebtoken');
const Model=require('../models/UserModels');
const express = require('express');
const router=express.Router();
const json=require('jsonwebtoken');
require('dotenv').config();



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
router.get('/getcity/:city',(req,res) => {
    
    console.log(req.params.city)
    Model.find({city: req.params.city})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        log.error(err);
        res.status(500).json(err);
        
    });
   
})


router.get('/getemail/:email',(req,res) => {
    Model.findOne({email :req.params.email})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        log.error(err);
        res.status(500).json(err);
        
    });
   
})
router.get('/getbyid/:id',(req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        log.error(err);
        res.status(500).json(err);
        
    });
})
router.delete('/deletebyid/:id',(req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        log.error(err);
        res.status(500).json(err);
        
    });
})
router.put('/updateid/:id',(req,res) => {
    Model.findByIdAndUpdate(req.params.id ,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        log.error(err);
        res.status(500).json(err);
        
    });
})








router.get('/getall',(req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        log.error(err);
        res.status(500).json(err);
        
    });
   
})
router.post('/authenticate',   (req,res)=>{
    model.findOne(req.body)
    .then((result) => {
        if(result){
            // payload,secretkey,experiy
            // data 1 
            const {_id,email,password}=result;
            const payload={_id,email,password} ;  
            jwt.sign(
                payload,
                process.env,SECRET_KEY,
                {expiresIn:'1hr'},
                (err,token)=>{
                    if(err){
                        console.log(err);
                        res.status(500).json(err);
                    }else{
                        res.status(200).json({token:token})
                    }
                }


            )
            

        }
        else{
            res.status(401).json({message:'Invaild'})

            //jwt to generate a token

        }
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err); // waps se bhej denge then k pas
        
    });

}
)

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