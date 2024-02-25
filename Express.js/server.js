const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 8080;     //? initializing PORT number
const app = express();
const mainRouter = require('./routes/index')
const productRouter = require('./routes/product')

app.set('view engine', 'ejs');


//! Static Middleware
app.use(express.static('public'))

//! Routing 
app.use('/',mainRouter);
app.use( productRouter)




app.listen(PORT , () => 
    console.log(`Listining on Port ${PORT}`)
    );