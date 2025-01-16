//

const http = require('http')
const dateTime = require('./logger')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('From the desk of Bright Balogun, The date and time are currently, : ' + dateTime.myDateTime())
  res.end()
}).listen(8080)
