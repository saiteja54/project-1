var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	fs.readFile('products.json', 'utf-8', function(err,data){
		if(err) throw err;
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Header":"Origin, X-Requested-With, Content-Type, Accept")
		res.write(data);
		res.end();
	})
})

server.listen(9300);