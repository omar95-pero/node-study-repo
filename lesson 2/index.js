const express= require('express');

const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'assets')))
app.get('/home',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
app.listen(3000,()=>{
    console.log('server listen on port 3000');
})