const dbPool = require('../config/database');

const getAllProgram = () => {
    const SQLQuery = 'SELECT * FROM program';
    return dbPool.execute(SQLQuery);
}

const createNewProgram = (body) => {
    const SQLQuery = `  INSERT INTO program (src, title, content, image) 
                        VALUES ('${body.src}', '${body.title}', '${body.content}', '${body.image}')`;
    return dbPool.execute(SQLQuery);
}

const updateProgram = (body, idProgram) => {
    const SQLQuery = `  UPDATE program
                        SET src='${body.src}', title='${body.title}', content='${body.content}', image='${body.image}'
                        WHERE id=${idProgram}`;
    return dbPool.execute(SQLQuery);
}

const deleteProgram = (idProgram) => {
    const SQLQuery = `DELETE FROM program WHERE id=${idProgram}`;
    return dbPool.execute(SQLQuery);
}

const detailProgram = (idProgram) => {
    const SQLQuery = `SELECT * FROM program WHERE id=${idProgram}`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllProgram,
    createNewProgram,
    updateProgram,
    deleteProgram,
    detailProgram
}