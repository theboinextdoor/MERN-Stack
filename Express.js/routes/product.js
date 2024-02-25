const router = require('express').Router();
const products = require('../productsData');

router.get('/products' , (req , res) => {
    res.set('Content-Type', 'text/html')
    res.status(202)

    const data = {
        title: 'My Products Page'
    }
    res.render('products' , data)
})

router.get('/api/products' , (req, res) => {

    res.json(products)
})


module.exports = router;