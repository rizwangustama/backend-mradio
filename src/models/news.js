const dbPool = require('../config/database');

const getAllNews = () => {
    const SQLQuery = 'SELECT * FROM news';

    return dbPool.execute(SQLQuery);
}

const createNewNews = (body) => {
    const SQLQuery = `  INSERT INTO news (image, title, content, link) 
                        VALUES ('${body.image}', '${body.title}', '${body.content}', '${body.link}')`;

    return dbPool.execute(SQLQuery);
}

const updateNews = (body, idNews) => {
    const SQLQuery = `  UPDATE news
                        SET image='${body.image}', title='${body.title}', content='${body.content}', link='${body.link}'
                        WHERE id=${idNews}`;

    return dbPool.execute(SQLQuery);
}

const deleteNews = (idNews) => {
    const SQLQuery = `DELETE FROM news WHERE id=${idNews}`;

    return dbPool.execute(SQLQuery);
}

const detailNews = (idNews) => {
    const SQLQuery = `SELECT * FROM news WHERE id=${idNews}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllNews,
    createNewNews,
    updateNews,
    deleteNews,
    detailNews
}