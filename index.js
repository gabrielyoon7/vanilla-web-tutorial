const express = require('express');
const app = express();

app.listen(8080,function(){
    console.log('listening on 8080');
});

// 여기에서 URL을 등록

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/bootstrap', function(req, res){
    res.sendFile(__dirname + '/bootstrap/bootstrap.html');
});

app.get('/jquery', function(req, res){
    res.sendFile(__dirname + '/jquery/jquery.html');
});