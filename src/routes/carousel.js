const express = require('express');

const carouselController = require('../controller/carousel');

const router = express.Router();


// READ - GET
router.get('/', carouselController.getAllCarousel);

router.get('/:idCarousel', carouselController.detailCarousel);

// CREATE - POST
router.post('/', carouselController.createNewCarousel);

// UPDATE - PATCH
router.patch('/:idCarousel', carouselController.updateCarousel);

//DELETE - DELETE
router.delete('/:idCarousel', carouselController.deleteCarousel);



module.exports = router;