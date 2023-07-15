const dbPool = require('../config/database');

const getAllSportifyList = () => {
    const SQLQuery = 'SELECT * FROM sportify_list';
    return dbPool.execute(SQLQuery);
}

const detailSportifyList = (idSportify) => {
    const SQLQuery = `SELECT * FROM sportify_list WHERE id=${idSportify}`;
    return dbPool.execute(SQLQuery);
}

const createNewSportifyList = (body) => {
    const SQLQuery = `  INSERT INTO sportify_list (title, html) 
                        VALUES ('${body.title}', '${body.html}')`;
    return dbPool.execute(SQLQuery);
}

const updateSportifyList = (body, idSportify) => {
    const SQLQuery = `  UPDATE sportify_list 
                        SET title='${body.title}', html='${body.html}'
                        WHERE id=${idSportify}`;
    return dbPool.execute(SQLQuery);
}

const deleteSportifyList= (idSportify) => {
    const SQLQuery = `DELETE FROM sportify_list WHERE id=${idSportify}`;
    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllSportifyList,
    detailSportifyList,
    createNewSportifyList,
    updateSportifyList,
    deleteSportifyList
}