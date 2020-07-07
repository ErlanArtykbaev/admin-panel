const http = require('http')
let user = require('./data/user.json')

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json')
  res.writeHead(200)

  let data = JSON.stringify(user)
  res.end(data)

})

server.listen(3001,() => {
  console.log('server is on 3001')
})