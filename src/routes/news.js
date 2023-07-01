const express = require('express');

const NewsController = require('../controller/news.js');

const router = express.Router();

// CREATE - POST
router.post('/', NewsController.createNewNews);

// READ - GET
router.get('/', NewsController.getAllNews);

router.get('/:idNews', NewsController.detailNews);

// UPDATE - PATCH
router.patch('/:idNews', NewsController.updateNews);

// DELETE - DELETE
router.delete('/:idNews', NewsController.deleteNews);



module.exports = router;