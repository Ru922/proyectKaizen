const mongoose = require('mongoose')
const {Schema} = mongoose
      
const bcryptjs = require('bcryptjs')
const bcrypt = require('bcryptjs')
//npm i -S bcryptjs
//npm i -S crypto-md5

let crypto
    try {
        crypto = require('crypto');
      } catch (err) {
    console.log('crypto support is disabled!');
      }


const UserSchema = new Schema ({
    username: { 
        type: String, 
        unique: true,
        required: true
    },
    email: { 
        type: String, 
        unique: true,
        required: true,
        lowercase: true 
    },
    name: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    avatar: {
        type: String
    },
    password: {
        required: true,
        type: String
//        select: false 
    },
    signupDate: { 
        type: Date, 
        default: Date.now() 
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    }
})
/*
UserSchema.pre('save', function (next) {
//UserSchema.pre('save', (next) => {
    let user = this
//    const user = this
    const salt_factor = 5;

    if (!user.isModified('password')) return next();
  
    bcrypt.genSalt(salt_factor, function(err, salt) {
      if (err) return next(err);
  
        bcryptjs.hash(user.password, salt, null,(err,hash) => {
            if (err) return next(err)
            bcryptjs.hash(user.password, salt, null, (err, hash) => {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    })
})
*/

UserSchema.methods.gravatar = function() {
    if (!this.name) return `https://gravatar.com/gravatar/?s=200&d=retro`

    const md5 = crypto.createHash('md5').update(this.name).digest('hex')
    return `https://gravatar.com/gravatar/${md5}?s=200&d=retro`
}

const User = mongoose.model('User', UserSchema);
module.exports = User


