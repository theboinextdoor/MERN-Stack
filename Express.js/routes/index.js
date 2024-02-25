const router = require('express').Router();
const path = require('path')
const apiKeyMiddleware = require('../middlewares/apiKey')


//! if you want to add the middleware on every route
// router.use(apiKeyMiddleware); 


router.get('/', (req, res) => {
    res.set('Content-Type','text/html')
    const data = {
        title : 'Home Page',
    }
    res.status(202).render('index', data)
})

router.get('/about', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(202);

    // res.sendFile(path.resolve(__dirname)+ '/index.html')

    const data = {
        title: 'About Page'
    }
    res.render('about', data)
})




router.get('/downlaod', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200)

    //? download method is used to download the file from the server. 
    res.download(path.resolve(__dirname) + '../views/about.ejs')
})


//! NOTE:- if you want to add multiple middleware then pass the middleware in an array as a parameter
// router.get('/api/products', apiKeyMiddleware, (req, res) => {
//     res.json([
//         {
//             id: '123',
//             name: 'chrome',
//         },
//         {
//             id: '1234',
//             name: 'firefox'
//         }
//     ])
// })





module.exports = router ;

