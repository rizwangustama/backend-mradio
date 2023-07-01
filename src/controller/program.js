const ProgramModel = require('../models/program');

const getAllProgram = async (req, res) => {
    try {
        const [data] = await ProgramModel.getAllProgram();
    
        res.json({  
            message: 'GET all program success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const detailProgram = async (req, res) => {
    const {idProgram} = req.params;
    try {
        const [data] = await ProgramModel.detailProgram(idProgram);
        res.json({
            message: 'DETAIL Program Success',
            data: data[0]
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewProgram = async (req, res) => {
    const {body} = req;
    console.log(body);

    if(body.image == '' || body.title == '' || body.content == '' || body.link == ''){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })   
    }

    try {
        await ProgramModel.createNewProgram(body);
        res.status(201).json({
            message: 'CREATE new program success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateProgram = async (req, res) => {
    const {idProgram} = req.params;
    const {body} = req;
    try {
        await ProgramModel.updateProgram(body, idProgram);
        res.json({
            message: 'UPDATE program success',
            data: {
                id: idProgram,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteProgram = async (req, res) => {
    const {idProgram} = req.params;
    try {
        await ProgramModel.deleteProgram(idProgram);
        res.json({
            message: 'DELETE program success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllProgram,
    createNewProgram,
    updateProgram,
    deleteProgram,
    detailProgram
}