const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, 'First name should contain at least three characters'],  
        },
        lastname: {
            type: String,
            
            minLength: [3, 'Last name should contain at least three characters'],
            }
        },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },

    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle : {
        color: {
            type: String,
            required: true,
            minLength: [3, 'Color should contain at least three characters'],
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, 'Plate should contain at least three characters'],
        },
        capacity : {
            type: Number,
            required: true,
            min: [1, 'Capacity should be at least 1'],
            
        },
        vehicleType: {
            type: String,
            required: true,
         enum: ['car', 'motorcycle','auto'],
                      
       
    }


    },
    location: {
        lat:{
            type : Number,
        },
        lng : {
            type : Number,
        }

    }

})


captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;