const CarouselModel = require('../models/carousel');

const getAllCarousel = async (req, res) => {
    try {
        const [data] = await CarouselModel.getAllCarousel();
    
        res.json({
            message: 'GET all Carousel success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const detailCarousel = async(req, res) => {
    const {idCarousel} = req.params;
    try {
        const [data] = await CarouselModel.detailCarousel(idCarousel);
        res.json({
            message: 'DETAIL Carousel Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewCarousel = async (req, res) => {
    const {body} = req;
    console.log(body);

    if(body.title == '' || body.url == '' || body.image == ''){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })   
    }

    try {
        await CarouselModel.createNewCarousel(body);
        res.status(201).json({
            message: 'CREATE new Carousel success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateCarousel = async (req, res) => {
    const {idCarousel} = req.params;
    const {body} = req;
    try {
        await CarouselModel.updateCarousel(body, idCarousel);
        res.json({
            message: 'UPDATE Carousel success',
            data: {
                id: idCarousel,
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


const deleteCarousel = async (req, res) => {
    const {idCarousel} = req.params;
    try {
        await CarouselModel.deleteCarousel(idCarousel);
        res.json({
            message: 'DELETE Carousel success',
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
    getAllCarousel,
    detailCarousel,
    createNewCarousel,
    updateCarousel,
    deleteCarousel
}