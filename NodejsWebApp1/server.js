var http = require('http')
const fs = require('fs')
var port = process.env.port || 3000
var htmlcontent
 fs.readFile('C:/Users/s-mrichins/source/repos/NodejsWebApp1/Index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    }
    else {
        htmlcontent = data
    }
})
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write(htmlcontent)
    res.end()
})
server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})