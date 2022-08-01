const http = require('http');
const express = require('express');
const fs = require('fs');
const body = require('body/json');
const server = express();

const app = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    var html = fs.readFileSync('./form.html');
if(req.method == 'GET'){
res.write(html)
}else if(req.method == 'POST'){

body(req,(err,body)=>{
    console.log(body);
    res.end(body)
})

}
}).listen(8000);


