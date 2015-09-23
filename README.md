# Mock.js 中间件

简单封装 Mock.js 用于 Express 的中间件

[![https://img.shields.io/npm/v/connect-mockjs.svg](https://img.shields.io/npm/v/connect-mockjs.svg)](https://www.npmjs.com/package/connect-mockjs) [![https://img.shields.io/npm/l/connect-mockjs.svg](https://img.shields.io/npm/l/connect-mockjs.svg)](https://www.npmjs.com/package/connect-mockjs)

安装：`npm i connect-mockjs`

使用：`app.use('/mock', mock());`

可以传参数，自定义模板文件夹地址 `app.use('/mock', mock('mock-tmpl'));`

示例查看文件夹 `example` 中的 `app.js`

运行 `app.js` 后, 访问 `http://localhost:3000/mock?mock=test/test` 或者 `http://localhost:3000/mock?mock=test` , 可以查看模拟数据, 支持 json 和 jsonp。

```js
var express = require('express'),
    mock = require('connect-mockjs');

var app = express();

app.use(express.query());

// app.use(mock('mock-tmpl')); 自定义模板文件夹
app.use(mock());

app.listen(3000);
```