const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('welcome to home page')
}
if(req.url === '/about'){
    res.end('here is our short history')
}
res.end(`
    <h1>Oops!</h1>
<p>We cant find anything</p>
<a href="/">back home</a>
    `)


})

server.listen(5000)