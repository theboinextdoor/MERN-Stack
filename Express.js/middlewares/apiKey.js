const { query } = require("express")

const apiKey = (req, res, next) => {

    const apiKey = '1234567'
    console.log(req.query)

    const userApiKey = req.query.apiKey ;

    if( userApiKey && (req.query.apiKey ===  apiKey)){
        next()
    }
    else{
        res.json({
            message: 'Not Allowed'
        })
    }

}


module.exports = apiKey;