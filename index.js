//impoting express
const express = require('express');

const UserRouter = require('./routers/UserRouter');
const ProductRouter = require('./routers/ProductRouter');
const cors = require('cors');


//initialize express
const app = express();
const port=5000;


// middleware to parse json request

// cors whicch send data from frontend
app.use(cors({
    origin: ['http://localhost:3000'], // your client url of frontend 27/07
   
}))
app.use(express.json());// ye middleware btaega ki dta jo arha h vo json ki file me arha h

app.use('/user',UserRouter);
app.use('/product',ProductRouter);



// endpoint or root path
app.get('/', (req, res) =>{
    res.send('Hello from Express Server');
})
app.get('/add', (req, res) =>{
    res.send('response from add');
})
app.get('/getall',(req,res)=>{
    res.send('response from getall');
})

app.get('/update',(req,res)=>{
    res.send('response from update')
})



// to start express server
app.listen(port,()=>{
    console.log('server started');
});
