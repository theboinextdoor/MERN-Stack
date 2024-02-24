const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 8080;     //? initializing PORT number
const app = express();


app.set('view engine', 'ejs');
// console.log(app.get('view engine'))





//! Static Middleware
// app.use(express.static('public'))




//! creating server for index page 
app.get('/', (req, res) => {
    res.set("Content-Type" , "text/html")
    res.status(200)
    // res.sendFile(path.resolve(__dirname)+ '/index.html')

    //? render method render the ejs file 
    res.render('index' , {
        title : 'Home Page'
    });

})

//! creating server for about page 
app.get('/about', (req, res) => {
    res.set("Content-Type" , "text/html")
    res.status(202)
    // res.sendFile(path.resolve(__dirname)+ '/about.html')

    //? render method render the ejs file 
    res.render('about' , {
        about: "About this Webpage"
    });
})

//! for downloading the content of the web page 
app.get('/download', (req, res) => {
    res.set("Content-Type" , "text/html");

    //? download method is used to download the file from the server.
    res.status(200).download(path.resolve(__dirname) + `/about.html`)
})



app.listen(PORT , () => 
    console.log(`Listining on Port ${PORT}`)
    );