const mongoose = require('mongoose');

const hpSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    cast: { type: String, defalut: 'General'},
    pump: { type: String, defalut: 'GAS'},
    dealership: {
        type: Number,
        required: true
    },
    message: {
        type: String
    },
})

const Register = new mongoose.model("Register", hpSchema)
module.exports = Register;