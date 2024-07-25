const { now } = require('mongoose');
const {Schema,model} = require('../connection'); //exporting from CONNECTION

//crerating model

const mySchema = new Schema({
    name:String,
    email:{type:String,unique:true},
    password:{type:String,required:true},
    city:{type:String,default:'unknown'},
    createdAt:{type:Date,default: Date.now}
})
//exporting user model file
module.exports=model('user',mySchema)

//

//

