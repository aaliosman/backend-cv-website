const CvInfo = require('../models/cvInfo');


const getCvsController = async (req, res) => {

    try {
        const allCvs = await CvInfo.find()
        res.status(200).send(allCvs)
    } catch (error) {
        console.log(error)
    }
}


const postCvController = async (req, res) => {
    
   
    try {
        const newCv = new CvInfo({
            name:req.body.name,
            phone:req.body.phone,
            adresse: req.body.adresse,
            myProfile: req.body.myProfile,
            getInTouch: req.body.getInTouch,
            projects: req.body.projects,
            experience: req.body.experience,
            education: req.body.education,
            skills: req.body.skills,
            image: req.body.image
        })
    
        const addedCv = await newCv.save()
        res.status(200).send(addedCv)
       } catch (error) {
           console.log(error);
       }
}

const getCvById = async (req, res) => {
    const { id } = req.params;
    
    try{
        const cvById = await CvInfo.findById(id);
        res.status(200).send(cvById)
        console.log(cvById);
    }
    catch(err){
        console.log(err);
    }
}

const deleteCvById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCvById = await CvInfo.findByIdAndDelete(id);
        res.status(200).send('this Cv deleted ')
        
    } catch (error) {
        console.log(error);
    }
}

const putCvById = async (req, res) => {
   
    const { id } = req.params;
    
    try {
        const updatedCvById = await CvInfo.findOneAndUpdate({id}, {
            
            name:req.body.name,
            phone:req.body.phone,
            adresse: req.body.adresse,
            myProfile: req.body.myProfile,
            getInTouch: req.body.getInTouch,
            projects: req.body.projects,
            experience: req.body.experience,
            education: req.body.education,
            skills: req.body.skills,
            image: req.body.image
        },
        {
            new: true
        }
        )
        
        console.log(updatedCvById);
        res.status(200).send(updatedCvById)
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postCvController,
    getCvsController,
    getCvById,
    deleteCvById,
    putCvById
    
}