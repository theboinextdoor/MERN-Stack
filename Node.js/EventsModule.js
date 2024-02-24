const eventEmitter = require('events')
class Auth extends eventEmitter{
    register(username){
        this.emit(`registered`, username)
        console.log('Register Successfully...')
    }

    welcome(username){
        this.emit(`welcomemsg`, username)
        console.log('Welcome to the world of Node.js')
    }

    password(username){
        this.emit(`newpassword`, username)
        console.log('Password Changed...')
    }
}


const auth = new Auth();

//Listen for registration message
auth.on('registered', (username) => {
    console.log(`Sending Registration to ${username}`)
})

//Listen for welcome message
auth.on('welcomemsg', (username) => {
    console.log(`Sending Welcome message to ${username}`)
})

//Listen for welcome message
auth.on('newpassword', (username) => {
    console.log(`${username}, your password has been changed`)
})


// Calling Function 
auth.welcome("Faraaz Ashraf")
auth.register("Damon")



