const express = require('express');
const ProgramController = require('../controller/program');

const router = express.Router();

// CREATE - POST
router.post('/', ProgramController.createNewProgram);

// READ - GET
router.get('/', ProgramController.getAllProgram);

// DETAIL - GET
router.get('/:idProgram', ProgramController.detailProgram);

// UPDATE - PATCH
router.patch('/:idProgram', ProgramController.updateProgram);

// DELETE - DELETE
router.delete('/:idProgram', ProgramController.deleteProgram);

module.exports = router;
