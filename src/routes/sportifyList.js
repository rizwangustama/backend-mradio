const express = require('express');

const sportifyListController = require('../controller/sportifyList');

const router = express.Router();


// READ - GET
router.get('/', sportifyListController.getAllSportifyList);

// DETAIL - GET
router.get('/:idSportify', sportifyListController.detailSportifyList);

// CREATE - POST
router.post('/', sportifyListController.createNewSportifyList);

// UPDATE - PATCH
router.patch('/:idSportify', sportifyListController.updateSportifyList);

//DELETE - DELETE
router.delete('/:idSportify', sportifyListController.deleteSportifyList);


module.exports = router;