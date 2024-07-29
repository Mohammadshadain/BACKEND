const { Schema, model } = require('../connection');
const mySchema = new Schema({
    name: String,

    email: String,

    password: String,



    

})
//exporting user model file
module.exports = model('product', mySchema)// agl alg model bnate h to nam alg rakhete h 