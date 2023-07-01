const ContentModel = require('../models/content');

const getAllContent = async (req, res) => {
    try {
        const [data] = await ContentModel.getAllContent();
    
        res.json({
            message: 'GET all Content success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const detailContent = async(req, res) => {
    const {idContent} = req.params;
    try {
        const [data] = await ContentModel.detailContent(idContent);
        res.json({
            message: 'DETAIL Content Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewContent = async (req, res) => {
    const {body} = req;
    console.log(body);

    if(body.title == '' || body.url == '' || body.image == ''){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })   
    }

    try {
        await ContentModel.createNewContent(body);
        res.status(201).json({
            message: 'CREATE new Content success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateContent = async (req, res) => {
    const {idContent} = req.params;
    const {body} = req;
    try {
        await ContentModel.updateContent(body, idContent);
        res.json({
            message: 'UPDATE Content success',
            data: {
                id: idContent,
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

const deleteContent = async (req, res) => {
    const {idContent} = req.params;
    try {
        await ContentModel.deleteContent(idContent);
        res.json({
            message: 'DELETE Content success',
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
    getAllContent,
    detailContent,
    createNewContent,
    updateContent,
    deleteContent,
}