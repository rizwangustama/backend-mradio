const SportifyModel = require('../models/sportify');

const getAllSportify = async (req, res) => {
    try {
        const [data] = await SportifyModel.getAllSportify();
    
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

const detailSportify = async(req, res) => {
    const {idSportify} = req.params;
    try {
        const [data] = await SportifyModel.detailSportify(idSportify);
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

// const createNewCarousel = async (req, res) => {
//     const {body} = req;
//     console.log(body);

//     if(body.title == '' || body.url == '' || body.image == ''){
//         return res.status(400).json({
//             message: 'Anda mengirimkan data yang salah',
//             data: null,
//         })   
//     }

//     try {
//         await CarouselModel.createNewCarousel(body);
//         res.status(201).json({
//             message: 'CREATE new Carousel success',
//             data: body
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server Error',
//             serverMessage: error,
//         })
//     }
// }

const createNewSportify = async (req, res) => {
    const {body} = req;

    console.log(body);
    if (body.title == '' || body.url == '' || body.image == '') {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null
        })
    }

    try {
        await SportifyModel.createNewSportify(body);
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

const updateSportify = async (req, res) => {
    const {idSportify} = req.params;
    const {body} = req;
    try {
        await SportifyModel.updateSportify(body, idSportify);
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

// const updateCarousel = async (req, res) => {
//     const {idCarousel} = req.params;
//     const {body} = req;
//     try {
//         await CarouselModel.updateCarousel(body, idCarousel);
//         res.json({
//             message: 'UPDATE Carousel success',
//             data: {
//                 id: idCarousel,
//                 ...body
//             },
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server Error',
//             serverMessage: error,
//         })
//     }
// }

const deleteSportify = async (req, res) => {
    const {idSportify} = req.params;
    try {
        await SportifyModel.deleteSportify(idSportify);
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


// const deleteCarousel = async (req, res) => {
//     const {idCarousel} = req.params;
//     try {
//         await CarouselModel.deleteCarousel(idCarousel);
//         res.json({
//             message: 'DELETE Carousel success',
//             data: null
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server Error',
//             serverMessage: error,
//         })
//     }
// }

module.exports = {
    getAllSportify,
    detailSportify,
    createNewSportify,
    updateSportify,
    deleteSportify
}