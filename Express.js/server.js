const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 8080;     //? initializing PORT number
const app = express();
const mainRouter = require('./routes/index')


app.set('view engine', 'ejs');


//! Static Middleware
app.use(express.static('public'))

//! Routing 
app.use('/',mainRouter);

app.listen(PORT , () => 
    console.log(`Listining on Port ${PORT}`)
    );