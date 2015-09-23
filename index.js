/*!
 * connect-mockjs
 * MIT Licensed
 */
var Mock = require('mockjs'),
    path = require('path'),
    fs = require('fs');
exports = module.exports = function mockjs(tmplPath) {
    tmplPath = tmplPath || 'mock';
    return function mockjs(req, res, next) {
        var dataPath = path.join(process.cwd(), tmplPath, req.query.mock);
        if (fs.existsSync(dataPath + '.mock')) {
            // eval 可以用什么替换呢?
            eval('var tmpl = ' + fs.readFileSync(dataPath + '.mock').toString());
            res.jsonp(Mock.mock(tmpl));
        }
        next();
    };
};

