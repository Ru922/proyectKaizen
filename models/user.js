const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const {Schema} = mongoose

let crypto
try {
    crypto = require('crypto');
  } catch (err) {
    console.log('crypto support is disabled!');
  }
const bcryptjs = require('bcryptjs')
const bcrypt = require('bcryptjs')
//npm i -S bcryptjs
//npm i -S crypto-md5

const UserSchema = new Schema ({
        email: { 
            type: String, 
            unique: true, 
            lowercase: true 
        },
        displayName: String,
        avatar: String,
        password: { 
            type: String, 
            select: false 
        },
        signupDate: { 
            type: Date, 
            default: Date.now() 
        },
        lastLogin: Date
})

UserSchema.pre('save', (next) => {
    let user = this
    if (!user.isModified('password')) return next()

    bcryptjs.hash(user.password, salt, null,(err,hash) => {
        if (err) return next(err)

        bcryptjs.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err)

            user.password = hash
            next()
        })
    })
})
UserSchema.methods.gravatar = function() {
    if (!this.email) return `https://gravatar.com/gravatar/?s=200&d=retro`

    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/gravatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)

//const User = mongoose.model('User',UserSchema);
//module.exports = User;
