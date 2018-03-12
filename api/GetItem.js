
module.exports = {
    "get": function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    }
};
