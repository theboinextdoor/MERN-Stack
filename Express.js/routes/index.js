const router = require('express').Router();
const path = require('path')


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



module.exports = router ;

