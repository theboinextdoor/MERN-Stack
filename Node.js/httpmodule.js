const http = require('http')
const fs = require('fs')
const path = require('path')



//! Cretaing the web server
const app = http.createServer((req, res) => {
    

  
    let filePath = path.join(__dirname , "public" ,  req.url === "/" ? 'index.html' : req.url  )

    //TODO Appending file extension 
    let contentType = "text/html"
    let ext = path.extname(filePath)
    if(!ext) {
        filePath += '.html'
    }

    switch(ext) {
        case ".css" : 
             contentType = "text/css"
             break;
        case ".js" : 
             contentType = "text/js"
             break;
        default :
            contentType= 'text/html'

    }

    fs.readFile(filePath, (err, content) => {
        if(err){
           fs.readFile(path.join(__dirname, "public", "error.html"), (err, content) => {
            if(err){
                res.writeHead(500)
                res.end("Some Error Occured!!!!!")
            }else{
                res.writeHead(404, {
                    "Content-Type": contentType,
                })
                res.end(content);
            }
           })
        }else{
            res.writeHead(200, {
                "Content-Type": contentType,
            })
            res.end(content)
        }
    })

    // res.end()
})

//! Condition if the port are availiable or not
const PORT = process.env.PORT || 8080;


//! setting up the port 
app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`)
})

