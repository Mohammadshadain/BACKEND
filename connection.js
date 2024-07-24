const mongoose = require('mongoose');
const url="mongodb+srv://shadain044714:2100100507msd@cluster0.fygy4ko.mongodb.net/msddb?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function----returns a promise object further than and err function
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);

    
});
module.exports =mongoose;