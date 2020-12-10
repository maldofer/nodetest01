var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function (req, res) {
   console.log(req);
   filename = 'sample_file02.pdf'
   location = './folder/' + filename;
   content = fs.readFileSync(location, {encoding: 'binary'});
   console.log(content);
   finalFile = Buffer.from(content, 'binary');

   res.writeHead(200, {
       'Content-Type': 'application/pdf',
       'Content-disposition': 'inline;filename=' + filename,
       'Content-Length': finalFile.length,
   });
   res.end(finalFile);
   
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})