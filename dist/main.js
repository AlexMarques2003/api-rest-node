"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const server = restify.createServer({
    name: 'api-rest',
    version: '1.0.0'
});
server.use(restify.plugins.queryParser());
// get simples
server.get('/hello', (req, resp, next) => {
    resp.contentType = 'application/json';
    //resp.setHeader('Content-Type')
    //resp.status(400)
    resp.json({ message: 'hello' });
    return next();
});
// get com informações do browser e Sistema Operacional e algumas informações a mais
// exemplo de chamada http://localhost:3000/info?name=teste
// exemplo utilizando o query do restify http://localhost:3000/info?name=teste&age=30
server.get('/info', (req, resp, next) => {
    resp.contentType = 'application/json';
    //resp.setHeader('Content-Type')
    //resp.status(400)
    resp.json({
        browser: req.userAgent(),
        method: req.method,
        url: req.href(),
        path: req.path(),
        query: req.query
    });
    return next();
});
server.listen(3000, () => {
    console.log('Api is running on http://localhost:3000');
});
