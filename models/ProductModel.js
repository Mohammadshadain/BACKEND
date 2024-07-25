const {Schema,model} = require('../connection');
const mySchema = new Schema({
    title:String,
    
   brand:String,
    
    catagory:String,
    
    model:String,
    
    price:String,
    
    image:String,
    
})
//exporting user model file
module.exports=model('producrt',mySchema)// agl alg model bnate h to nam alg rakhete h 