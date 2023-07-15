const YoutubeModel = require('../models/youtube');

const getAllYoutube = async (req, res) => {
    try {
        const[data] = await YoutubeModel.getAllYoutube();
        res.json({
            message: 'GET all youtube succes',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const detailYoutube = async(req, res) => {
    const {idYoutube} = req.params;
    try {
        const [data] = await YoutubeModel.detailYoutube(idYoutube);
        res.json({
            message: "Detail Youtube Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewYoutube = async (req, res) => {
    const {body} = req;
    console.log(body);
    if (body.title == '' || body.url == '' || body.image == '') {
        return res.status(400).json({
            message: 'Anda Mengirimkan data yang salah',
            data: null
        })
    }

    try {
        await YoutubeModel.createNewYoutube(body);
        res.status(201).json({
            message: 'Create new youtube success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}


const updateYoutube = async (req, res) => {
    const {idYoutube} = req.params;
    const {body} = req;

    try {
        await YoutubeModel.updateYoutube(body, idYoutube);
        res.json({
            message: 'Update youtube success',
            data: {
                id: idYoutube,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteYoutube = async (req, res) => {
    const {idYoutube} = req.params;
    try {
        await YoutubeModel.deleteYoutube(idYoutube);
        res.json({
            message: 'Delete Carousel Success',
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
    getAllYoutube,
    detailYoutube,
    createNewYoutube,
    updateYoutube,
    deleteYoutube
}