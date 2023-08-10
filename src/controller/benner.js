const BennerModel = require('../models/benner');

const getAllBenner= async (req, res) => {
    try {
        const [data] = await BennerModel.getAllBenner();
    
        res.json({
            message: 'GET all Benner success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const detailBenner = async(req, res) => {
    const {idBenner} = req.params;
    try {
        const [data] = await BennerModel.detailBenner(idBenner);
        res.json({
            message: 'DETAIL Benner Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewBenner= async (req, res) => {
    const {body} = req;
    console.log(body);

    // if(body.title == '' || body.url == '' || body.image == ''){
    //     return res.status(400).json({
    //         message: 'Anda mengirimkan data yang salah',
    //         data: null,
    //     })   
    // }

    try {
        await BennerModel.createNewBenner(body);
        res.status(201).json({
            message: 'CREATE new Benner success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateBenner = async (req, res) => {
    const {idBenner} = req.params;
    const {body} = req;
    try {
        await BennerModel.updateBenner(body, idBenner);
        res.json({
            message: 'UPDATE Benner success',
            data: {
                id: idBenner,
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


const deleteBenner = async (req, res) => {
    const {idBenner} = req.params;
    try {
        await BennerModel.deleteBenner(idBenner);
        res.json({
            message: 'DELETE Benner success',
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
    getAllBenner,
    detailBenner,
    createNewBenner,
    updateBenner,
    deleteBenner
}