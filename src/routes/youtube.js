const express = require('express');

const YoutubeController = require('../controller/youtube');

const router = express.Router();


// READ - GET
router.get('/', YoutubeController.getAllYoutube);

router.get('/:idYoutube', YoutubeController.detailYoutube);

// CREATE - POST
router.post('/', YoutubeController.createNewYoutube);

// UPDATE - PATCH
router.patch('/:idYoutube', YoutubeController.updateYoutube);

//DELETE - DELETE
router.delete('/:idYoutube', YoutubeController.deleteYoutube);



module.exports = router;