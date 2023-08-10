const express = require('express');

const bennerController = require('../controller/benner');

const router = express.Router();


// READ - GET
router.get('/', bennerController.getAllBenner);

router.get('/:idBenner', bennerController.detailBenner);

// CREATE - POST
router.post('/', bennerController.createNewBenner);

// UPDATE - PATCH
router.patch('/:idBenner', bennerController.updateBenner);

//DELETE - DELETE
router.delete('/:idBenner', bennerController.deleteBenner);



module.exports = router;