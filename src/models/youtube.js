const dbPool = require('../config/database');

const getAllYoutube = () => {
    const SQLQuery = 'SELECT * FROM youtube';

    return dbPool.execute(SQLQuery);
}

const detailYoutube = (idYoutube) => {
    const SQLQuery = `SELECT * FROM youtube WHERE id=${idYoutube}`;

    return dbPool.execute(SQLQuery);
}

const createNewYoutube= (body) => {
    const SQLQuery = `  INSERT INTO youtube (title, url, image) 
                        VALUES ('${body.title}', '${body.url}', '${body.image}' )`;

    return dbPool.execute(SQLQuery);
}

const updateYoutube = (body, idYoutube) => {
    const SQLQuery = `  UPDATE youtube
                        SET title='${body.title}', url='${body.url}', image='${body.image}'
                        WHERE id=${idYoutube}`;

    return dbPool.execute(SQLQuery);
}

const deleteYoutube= (idYoutube) => {
    const SQLQuery = `DELETE FROM youtube WHERE id=${idYoutube}`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
   getAllYoutube,
   detailYoutube,
   createNewYoutube,
   updateYoutube,
   deleteYoutube
}