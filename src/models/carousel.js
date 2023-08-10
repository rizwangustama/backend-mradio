const dbPool = require('../config/database');

const getAllCarousel = () => {
    const SQLQuery = 'SELECT * FROM carousel';

    return dbPool.execute(SQLQuery);
}

const detailCarousel = (idCarousel) => {
    const SQLQuery = `SELECT * FROM carousel WHERE id=${idCarousel}`;

    return dbPool.execute(SQLQuery);
}

const createNewCarousel= (body) => {
    const SQLQuery = `  INSERT INTO carousel (image_desktop, image_mobile, title, url, style, content, label_button, link_button, icon_image) 
                        VALUES ('${body.image_desktop}', '${body.image_mobile}', '${body.title}', '${body.url}', '${body.style}', '${body.content}', '${body.label_button}', '${body.link_button}', '${body.icon_image}' )`;

    return dbPool.execute(SQLQuery);
}

const updateCarousel = (body, idCarousel) => {
    const SQLQuery = `  UPDATE carousel
                        SET image_desktop='${body.image_desktop}', image_mobile='${body.image_mobile}', title='${body.title}', url='${body.url}', style='${body.style}', content='${body.content}', label_button='${body.label_button}', link_button='${body.link_button}', icon_image='${body.icon_image}'
                        WHERE id=${idCarousel}`;

    return dbPool.execute(SQLQuery);
}

const deleteCarousel= (idCarousel) => {
    const SQLQuery = `DELETE FROM carousel WHERE id=${idCarousel}`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAllCarousel,
    detailCarousel,
    createNewCarousel,
    updateCarousel,
    deleteCarousel
}