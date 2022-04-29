const express = require('express');
const app = express();

app.listen(8080,function(){
    console.log('listening on 8080');
    const open = require('open');
    open('http://localhost:8080');
    console.log('http://localhost:8080 페이지를 자동으로 열었습니다.')
});

app.use(express.static('src'));

// 여기에서 URL을 등록

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/bootstrap', function(req, res){
    res.sendFile(__dirname + '/src/bootstrap/bootstrap.html');
});

app.get('/jquery', function(req, res){
    res.sendFile(__dirname + '/src/jquery/jquery.html');
});

app.get('/react', function(req, res){
    res.sendFile(__dirname + '/src/react/react.html');
});

