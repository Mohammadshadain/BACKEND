router.get('/add',(req,res)=>{

    res.sends('response from add');

})
router.get('/getall',(req,res)=>{
    res.sends('response from get all');
}
    
)
router.get('/end',(req,res)=>{
    res.sends('response from end');
});
router.get('/start',(req,res)=>{
    res.sends('response from start');
}) 