const http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('Hello World!, from Bright Omolayo')
}).listen(8080)

// console.log('This example is different!')
// console.log('The result is displayed in the Command Line Interface')
