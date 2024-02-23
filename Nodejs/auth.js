const register = (id, username, contactNum , gmailid) => {
    console.log(`Id is : ${id}`)
    console.log(`Username is : ${username}`)
    console.log(`Contact Id  is : ${contactNum}`)
    console.log(`Mail Id  is : ${gmailid}`)

    console.log("User has been registered successfully")
}

const login = (username, password) => {
    console.log(`Username: ${username}`)
    console.log(`Password: ${password}`)
}

module.exports = {
    register,
    login,
}