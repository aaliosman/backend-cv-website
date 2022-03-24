const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const CvInfoSchema = new Schema({
    name:String,
    phone:Number,
    adresse: String,
    myProfile: String,
    getInTouch: String,
    projects: String,
    skills: String,
    experience: String,
    education: String,
    image: String,
}, { timestamps: true });

const CvInfoModel = mongoose.model('cvInfo', CvInfoSchema, 'cfInfos');

module.exports = CvInfoModel;