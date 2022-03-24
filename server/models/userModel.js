const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: true });

const UserModel = mongoose.model('user', UserSchema, 'Users');

module.exports = UserModel;