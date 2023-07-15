const dbPool = require('../config/database');

const getAllSportify = () => {
    const SQLQuery = 'SELECT * FROM sportify';
    return dbPool.execute(SQLQuery);
}

const detailSportify = (idSportify) => {
    const SQLQuery = `SELECT * FROM sportify WHERE id=${idSportify}`;
    return dbPool.execute(SQLQuery);
}

const createNewSportify = (body) => {
    const SQLQuery = `  INSERT INTO sportify (title, url, image) 
                        VALUES ('${body.title}', '${body.url}', '${body.image}')`;
    return dbPool.execute(SQLQuery);
}

const updateSportify = (body, idSportify) => {
    const SQLQuery = `  UPDATE sportify 
                        SET title='${body.title}', url='${body.url}', image='${body.image}' 
                        WHERE id=${idSportify}`;
    return dbPool.execute(SQLQuery);
}

const deleteSportify= (idSportify) => {
    const SQLQuery = `DELETE FROM sportify WHERE id=${idSportify}`;
    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllSportify,
    detailSportify,
    createNewSportify,
    updateSportify,
    deleteSportify
}