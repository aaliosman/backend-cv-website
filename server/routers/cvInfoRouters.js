const router = require('express').Router();

const {
    postCvController,
    getCvsController,
    getCvById,
    deleteCvById,
    putCvById
} = require('../controllers/cvInfoController');



router.route('/')
.get(getCvsController)

router.route('/')
.post(postCvController)

router.route('/:id')

.get(getCvById)
.delete(deleteCvById)
.put(putCvById)

module.exports = router;