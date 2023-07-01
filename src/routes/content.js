const express = require('express');

const contentController = require('../controller/content.js');

const router = express.Router();

// // CREATE - POST
router.post('/', contentController.createNewContent);

// READ - GET
router.get('/', contentController.getAllContent);

router.get('/:idContent', contentController.detailContent);

// // UPDATE - PATCH
router.patch('/:idContent', contentController.updateContent);

// // DELETE - DELETE
router.delete('/:idContent', contentController.deleteContent);



module.exports = router;