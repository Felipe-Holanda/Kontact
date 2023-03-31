import mongoose from 'mongoose'
import { hash } from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    secondaryEmail: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    secondaryPhone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    sharing: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('User', userSchema)
export default User