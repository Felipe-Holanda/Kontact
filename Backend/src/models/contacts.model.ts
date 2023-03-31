import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    secondaryPhone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    secondaryEmail: {
        type: String,
        required: false
    },
    owner: {
        type: String,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;