const SportifyListModel = require('../models/sportifyList');

const getAllSportifyList = async (req, res) => {
    try {
        const [data] = await SportifyListModel.getAllSportifyList();
    
        res.json({
            message: 'GET all sportify success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const detailSportifyList = async(req, res) => {
    const {idSportify} = req.params;
    try {
        const [data] = await SportifyListModel.detailSportifyList(idSportify);
        res.json({
            message: 'DETAIL Sportify Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Sever Error',
            serverMessage: error,
        })
    }
}

const createNewSportifyList = async (req, res) => {
    const {body} = req;

    console.log(body);
    if (body.title == '' || body.url == '' || body.image == '') {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null
        })
    }

    try {
        await SportifyListModel.createNewSportifyList(body);
        res.status(201).json({
            message: 'Create new Sportify Success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateSportifyList = async (req, res) => {
    const {idSportify} = req.params;
    const {body} = req;
    try {
        await SportifyListModel.updateSportifyList(body, idSportify);
        res.json({
            message: 'UPDATE Carousel Success',
            data: {
                id: idSportify,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const deleteSportifyList = async (req, res) => {
    const {idSportify} = req.params;
    try {
        await SportifyListModel.deleteSportifyList(idSportify);
        res.json({
            message: 'DELETE Sportify Succes',
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
    getAllSportifyList,
    detailSportifyList,
    createNewSportifyList,
    updateSportifyList,
    deleteSportifyList
}