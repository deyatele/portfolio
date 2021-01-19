const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url == '/css/style.css') {
        const css = fs.readFileSync('css/style.css', 'utf-8');
        res.end(css);
    }
    if (req.url == '/js/app.js') {
        // const css = fs.readFileSync('css/style.css', 'utf-8');
        const js = fs.readFileSync('js/app.js', 'utf-8');
        res.end(js);
    } else {
        const html = fs.readFileSync('index.html', 'utf-8');
        res.end(html);
    }




});
server.listen(3000);
console.log('Server Start');