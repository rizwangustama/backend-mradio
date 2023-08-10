const dbPool = require('../config/database');

const getAllBenner = () => {
    const SQLQuery = 'SELECT * FROM benner';

    return dbPool.execute(SQLQuery);
}

const detailBenner = (idBenner) => {
    const SQLQuery = `SELECT * FROM benner WHERE id=${idBenner}`;

    return dbPool.execute(SQLQuery);
}

const createNewBenner= (body) => {
    const SQLQuery = `  INSERT INTO benner (title, content, image, url, style) 
                        VALUES ('${body.title}', '${body.content}', '${body.image}', '${body.url}', '${body.style}' )`;
    return dbPool.execute(SQLQuery);
}

const updateBenner = (body, idBenner) => {
    const SQLQuery = `  UPDATE benner
                        SET title='${body.title}', content='${body.content}', image='${body.image}', url='${body.url}', style='${body.style}'
                        WHERE id=${idBenner}`;

    return dbPool.execute(SQLQuery);
}

const deleteBenner= (idBenner) => {
    const SQLQuery = `DELETE FROM benner WHERE id=${idBenner}`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAllBenner,
    detailBenner,
    createNewBenner,
    updateBenner,
    deleteBenner
}