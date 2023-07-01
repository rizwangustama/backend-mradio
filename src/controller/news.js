const NewsModel = require('../models/news');

const getAllNews = async (req, res) => {
    try {
        const [data] = await NewsModel.getAllNews();
    
        res.json({
            message: 'GET all news success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewNews = async (req, res) => {
    const {body} = req;
    console.log(body);

    if(body.image == '' || body.title == '' || body.content == '' || body.link == ''){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })   
    }

    try {
        await NewsModel.createNewNews(body);
        res.status(201).json({
            message: 'CREATE new news success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateNews = async (req, res) => {
    const {idNews} = req.params;
    const {body} = req;
    try {
        await NewsModel.updateNews(body, idNews);
        res.json({
            message: 'UPDATE news success',
            data: {
                id: idNews,
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

const detailNews = async(req, res) => {
    const {idNews} = req.params;
    try {
        const [data] = await NewsModel.detailNews(idNews);
        res.json({
            message: 'DETAIL news Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}

const deleteNews = async (req, res) => {
    const {idNews} = req.params;
    try {
        await NewsModel.deleteNews(idNews);
        res.json({
            message: 'DELETE news success',
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
    getAllNews,
    createNewNews,
    updateNews,
    deleteNews,
    detailNews
}