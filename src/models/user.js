const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length <= 6) throw new Error('Password must be longer than 6 chars!')
            if (value.toLowerCase().includes('password')) throw new Error('Password must not contain "password"!')
        }
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value <0 ){
                throw new Error('Age must be a postive number')
            }
        }
    }
})

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email})

    if (!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch){
        throw new Error('Unable to login!')
    }

    return user
}

// Hash the plain text password before saving
// arrow function does not bind "this"
userSchema.pre('save', async function(next){
//userSchema.pre('save', async (next) => {    
    const user = this
//    console.log("this is " + this)    
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


const User = mongoose.model('User', userSchema)

module.exports = User