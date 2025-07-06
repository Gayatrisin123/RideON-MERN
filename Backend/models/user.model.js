const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type:String,
            required:true,
            minLength:[3,'First name should contain at least three characters'],
        },
        lastname:{
            type:String,
            
            minLength:[3,'last name should contain at least three characters'],
        },
        email :{
              type:String,
              required:true,
              unique:true,
              minlength :[5,'Email should contain at least five character'],
              
        },
        password : {
            type: String,
            required:true,
            select: false,
        },
        socketId:{
            type:String,
        }
    },
}) 

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePAssword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;