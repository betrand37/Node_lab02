
var http = require('http')
var fs = require('fs')
var port = 8081
var host = '127.0.0.1'
var requestCounter = 0

var filename = 'package.json'

var server = http.createServer(handleRequest)
server.listen(port,host,function(){
    console.log('Server is listening on:' + host + ' ' + port )
})

function handleRequest(request,response){
    requestCounter++;
    console.log(`>> handling request... ${request.url}`)
    console.log(`request counter: ${request.url}`)
    response.writeHead(200,{"Content-type":"text/plain"});

    fs.readFile(filename, 'utf8', function(err,data){
        var requestCounterString = "======> Request Count: " + requestCounter + "\n======================================";
        if(err){
            return console.log(err)
        }
        response.end(data)

    })
}