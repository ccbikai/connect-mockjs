var express = require('express'),
    mock = require('../index');

var app = express();

app.use(express.query());

// app.use(mock('mock-tmpl')); 自定义模板文件夹
app.use('/mock', mock());

app.listen(3000);

module.exports = app;
