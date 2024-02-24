const http = require('http');
const server = http.createServer((req , res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("<h1>Hey This is your Default page.</h1>")
        res.end()
    }else if(req.url === '/Home'){
        res.writeHead(200,  {'Content-Type': 'text/html'})
        res.write("<h1>Hey This is your Home page.</h1>")
        res.end()
    }else if(req.url === '/About'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("<h1>Hey This is your About page.</h1>")
        res.end()
    }else if(req.url === '/Profile'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("<h1>Hey This is your Profile page.</h1>")
        res.end()
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("<h1>404 , This Page not found on internet</h1>")
        res.end();
    }
})


//! some example of cli-color
const color = require('cli-color')
console.log(color.red("Hey i am Red Ranger."))
console.log(color.blue('Hey i am blue Ranger.'))



server.listen(4500);