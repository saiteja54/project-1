var fs = require('fs');

// Write in file
// fs.writeFile('sampleFile.txt','This is dummy file created', function(err){
// 	if(err) throw err;
// 	console.log('File created successfully');
// })

 // fs.appendFile('sampleFile.txt',`This is node application ${Math.random()}\n`, function(err){
 // 	if(err) throw err;
 // 	console.log('File created successfully');
 // })



 // fs.appendFile('sampleFile.txt',`This is node application ${Math.random()}\n`, function(err){
 // 	if(err) throw err;
 // 	fs.readFile('sampleFile.txt','utf-8',function(err,data){
	// 	if(err) throw err;
	// 	console.log(data);
	// })

 // })

// fs.readFile('sampleFile.txt','utf-8',function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// })

 fs.readFile('products.json','utf-8',function(err,data){
  	if(err) throw err;
 	console.log(data);
  })


// fs.rename('text2.txt','text3.txt',function(err,data){
// 	if(err) throw err;
// 	console.log('File renamed');
// })

// fs.unlink('text3.txt', function(err,data){
// 	if(err) throw err;
// 	console.log('File deleted');
// })

