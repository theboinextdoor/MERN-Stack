//! Core Modules

const path = require('path')


//? dirName
console.log('Folder Name is: ', path.dirname(__filename))

//? fileName
console.log('File Name: ', path.basename(__filename))

//? Extension 
console.log('Extension Name: ', path.extname(__filename))

//? parse
console.log('Parse: ', path.parse(__filename))

//? join
console.log('Join: ', path.join(__dirname, 'order', 'app.js'))

