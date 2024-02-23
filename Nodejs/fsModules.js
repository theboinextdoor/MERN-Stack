//! file System...

const fs = require('fs')
const path = require('path')


//ToDO Make a directory or folder
//? mkdir function will make a directory and it will contain few arguments 
//? 1. we will define a oath where we want to create the file.
//? 2. then there will be a function for handling the error


// fs.mkdir(path.join(__dirname, '/testFile'), (err) => {
//     if(err){
//         console.log("Something went wrong")
//         console.log(err)
//         return ;
//     }

//     console.log("Directory Created Successfully.")
// })


// //ToDO Cretae a file

// fs.writeFile(path.join(__dirname, 'testFile' , 'testFile.js'), "Hellow Node.js" , (err) => {
    //     if(err){
        //         throw new err;
        
        //     }

//     //TODO to append the data to the existing file
//     fs.appendFile(path.join(__dirname, "testFile" , "testFile.txt") , "I am new in Node.js ", (err) => {
//         if(err){
//             throw new err;
//         }

//         console.log("File Append Successfully...")
//     })

//     console.log("File created....")
// } )




    // //ToDO Read a file

    //! WARNING :- if you will not use the utf-8 then the datd will be in binary form
    fs.readFile(path.join(__dirname, "testFile" , "testFile.txt"),'utf-8', (err, data) => {
        if(err){
            throw new err;
        }

    //    const content = Buffer.from(data)  //this will convert the binary data
        console.log(data)    // toString method will change the binary into the String. 
    })

