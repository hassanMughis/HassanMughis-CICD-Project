const http = require('http')
http.createServer((req, res) => {
	res.writeHead(200);
	res.end('hello from jenkins pipline! \n');
}).listen(3000, () => {
    console.log('Server is running on port 3000');
});
