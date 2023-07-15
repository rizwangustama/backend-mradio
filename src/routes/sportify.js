const express = require('express');

const sportifyController = require('../controller/Sportify');

const router = express.Router();


// READ - GET
router.get('/', sportifyController.getAllSportify);

router.get('/:idSportify', sportifyController.detailSportify);

// CREATE - POST
router.post('/', sportifyController.createNewSportify);

// UPDATE - PATCH
router.patch('/:idSportify', sportifyController.updateSportify);

//DELETE - DELETE
router.delete('/:idSportify', sportifyController.deleteSportify);


module.exports = router;