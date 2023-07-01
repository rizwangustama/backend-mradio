const dbPool = require('../config/database');

const getAllCarousel = () => {
    const SQLQuery = 'SELECT * FROM carosel';

    return dbPool.execute(SQLQuery);
}

const detailCarousel = (idCarousel) => {
    const SQLQuery = `SELECT * FROM carosel WHERE id=${idCarousel}`;

    return dbPool.execute(SQLQuery);
}

const createNewCarousel= (body) => {
    const SQLQuery = `  INSERT INTO carosel (title, url, image) 
                        VALUES ('${body.title}', '${body.url}', '${body.image}' )`;

    return dbPool.execute(SQLQuery);
}

const updateCarousel = (body, idCarousel) => {
    const SQLQuery = `  UPDATE carosel
                        SET title='${body.title}', url='${body.url}', image='${body.image}'
                        WHERE id=${idCarousel}`;

    return dbPool.execute(SQLQuery);
}

const deleteCarousel= (idCarousel) => {
    const SQLQuery = `DELETE FROM carosel WHERE id=${idCarousel}`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAllCarousel,
    detailCarousel,
    createNewCarousel,
    updateCarousel,
    deleteCarousel
}