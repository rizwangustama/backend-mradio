const dbPool = require('../config/database');

const getAllContent = () => {
    const SQLQuery = 'SELECT * FROM content';

    return dbPool.execute(SQLQuery);
}

const detailContent = (idContent) => {
    const SQLQuery = `SELECT * FROM content WHERE id=${idContent}`;

    return dbPool.execute(SQLQuery);
}

const createNewContent= (body) => {
    const SQLQuery = `  INSERT INTO content (title, url, image) 
                        VALUES ('${body.title}', '${body.url}', '${body.image}' )`;

    return dbPool.execute(SQLQuery);
}

const updateContent = (body, idContent) => {
    const SQLQuery = `  UPDATE content
                        SET title='${body.title}', url='${body.url}', image='${body.image}'
                        WHERE id=${idContent}`;

    return dbPool.execute(SQLQuery);
}

const deleteContent = (idNews) => {
    const SQLQuery = `DELETE FROM content WHERE id=${idNews}`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAllContent,
    detailContent,
    createNewContent,
    updateContent,
    deleteContent
}