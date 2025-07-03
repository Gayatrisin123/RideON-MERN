const userModel = require('../models/user.model');


module.exports.createUSer = async({
    firstname, email, password
}) =>{
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname,
            
        },
        email,
        password
    })
    return user;
}